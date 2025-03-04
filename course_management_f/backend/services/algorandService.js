// This module handles all interactions with the Algorand blockchain.
const algosdk = require('algosdk');
// Load environment variables containing Algorand credentials
require('dotenv').config();
const algodToken = process.env.ALGOD_TOKEN;
const algodServer = process.env.ALGOD_SERVER;
const algodPort = process.env.ALGOD_PORT;

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY;  // VERY IMPORTANT: Securely manage this!
const deployerAccount = algosdk.mnemonicToSecretKey(deployerPrivateKey);

// Function to compile TEAL code
async function compileTeal(algodClient, tealCode) {
    const encoder = new TextEncoder();
    const programBytes = encoder.encode(tealCode);
    const compileResponse = await algodClient.compile().source(programBytes).do();
    return new Uint8Array(Buffer.from(compileResponse.result, "base64"));
}

exports.createCourseApp = async (name, description, instructor, syllabusCid, credits) => {
  try {
    // 1. Define the TEAL code for your smart contract (approval and clear state programs).
    const approvalProgramSource = `#pragma version 6
      // Your TEAL code here (e.g., from the PyTeal compilation output)
      int 1
      return
    `;

    const clearProgramSource = `#pragma version 6
      int 1
      return`;

    // 2. Compile the TEAL code.

    const approvalProgram = await compileTeal(algodClient, approvalProgramSource);
    const clearProgram = await compileTeal(algodClient, clearProgramSource);


    // 3. Define global and local state schema (adjust as needed).
    const globalSchema = new algosdk.StateSchema({ numUint: 5, numByteSlice: 3 }); // Example: name, desc, inst, syllabus, credits + some ints for metadata
    const localSchema = new algosdk.StateSchema({ numUint: 0, numByteSlice: 0 }); // Example: user enrolled?

    // 4. Create the application creation transaction.
    const txn = algosdk.makeApplicationCreateTxnFromObject({
      from: deployerAccount.addr,
      suggestedParams: await algodClient.getTransactionParams().do(),
      onComplete: algosdk.OnApplicationComplete.NoOpOC,
      approvalProgram: approvalProgram,
      clearProgram: clearProgram,
      globalStateSchema: globalSchema,
      localStateSchema: localSchema
    });

    // 5. Sign the transaction.
    const signedTxn = txn.signTxn(deployerAccount.sk);

    // 6. Send the transaction to the network.
    const txId = txn.txID().toString();
    await algodClient.sendRawTransaction(signedTxn).do();

    // 7. Wait for confirmation.
    const confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);

    // 8. Get the application ID.
    const appId = confirmedTxn["application-index"];

    console.log(`Created new app-id = ${appId}`);
    return appId;

  } catch (error) {
    console.error("Failed to create course app:", error);
    throw error; // Re-throw to be handled by the controller.
  }
};

// Implement other functions for interacting with the smart contracts (enrollment, grade submission, etc.)
