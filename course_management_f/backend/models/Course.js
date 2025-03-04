// Represents the structure of a course.  Doesn't directly interact with the blockchain here.
class Course {
    constructor(id, name, description, instructor, syllabusCid, credits, appId) { //appId = Algorand AppID
      this.id = id;  // Unique ID (could be generated or based on Algorand transaction ID)
      this.name = name;
      this.description = description;
      this.instructor = instructor; // Algorand address of the instructor
      this.syllabusCid = syllabusCid; // CID of the syllabus on IPFS
      this.credits = credits;
      this.appId = appId; //Algorand Smart Contract application id to manipulate data for specific course
    }
  }
  
  module.exports = Course;
  