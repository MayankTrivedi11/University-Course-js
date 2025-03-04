import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Decentralized University</h1>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/add" element={<AddCourse />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
