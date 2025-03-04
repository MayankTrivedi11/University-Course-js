// This file handles all API calls to the backend.
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update if your backend is running elsewhere

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createCourse = async (courseData) => {
  try {
    const response = await api.post('/courses', courseData);
    return response.data;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
};

export const getCourse = async (courseId) => {
    try {
      const response = await api.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting course:', error);
      throw error;
    }
  };

// Add other API functions (get courses, enroll, submit grades, etc.)
