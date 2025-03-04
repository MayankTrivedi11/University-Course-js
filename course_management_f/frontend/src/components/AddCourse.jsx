import React, { useState } from 'react';
import { createCourse } from '../services/api';

const AddCourse = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [syllabusCid, setSyllabusCid] = useState('');
  const [credits, setCredits] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCourse = await createCourse({ name, description, instructor, syllabusCid, credits });
      setMessage(`Course "${newCourse.name}" created successfully!`);
      // Reset form fields
      setName('');
      setDescription('');
      setInstructor('');
      setSyllabusCid('');
      setCredits('');

    } catch (error) {
      setMessage(`Error creating course: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Add New Course</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Instructor (Algorand Address):</label>
        <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />

        <label>Syllabus CID (IPFS):</label>
        <input type="text" value={syllabusCid} onChange={(e) => setSyllabusCid(e.target.value)} required />

         <label>Credits:</label>
        <input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} required />

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
