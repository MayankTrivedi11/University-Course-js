import React, { useState, useEffect } from 'react';
import { getCourse } from '../services/api';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        //Load all courses from database by calling api
        const loadCourses = async () => {
            //fetch request to load all courses
            //setCourses(coursedata)
            //Here data contains all courses and you can perform other logic

        }
        loadCourses()
    }, []);

    return(
        <div>
            <h2>Courses</h2>
            {courses.length === 0 ?
                <p>No courses available</p> :
                (<ul>
                    {courses.map(course => (
                        <li key={course.id}>
                            {course.name} - {course.instructor}
                        </li>
                    ))}
                </ul>)
            }
        </div>
    )
}

export default CourseList;
