import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../LodeCourse/course';

const Courses = ({handleClick}) => {
    const [courses, setCourses]= useState([]);
    useEffect(()=>{
        const lodeCourses= async()=>{
            const lodeData=await fetch('course.json');
            const convertData= await lodeData.json();
            setCourses(convertData)
            
        };
        lodeCourses();
    },[])
    // console.log(courses)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full lg:w-3/4'>
        {
            courses.map(singleCourse=>{
                return (
                        <Course
                        key={singleCourse.id}
                        singleCourse={singleCourse}
                        handleClick={handleClick}
                        ></Course>
                )
            })
        }
    </div>
  )
}
Courses.propTypes = {
    handleClick: PropTypes.func
}

export default Courses