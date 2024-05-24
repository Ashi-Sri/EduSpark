import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "./../constants/courses";
import { CartContext } from "./cartContext";
import '../App.css'

const Courses = () => {
    const {handleAddToCart} = useContext(CartContext);

  return (
    <div className="courses ">
      <h2 className=""> Our Popular Courses</h2>
      <div className="container courses_container mt-2">
        {courses.map((course, i) => {
          return (
            <div
              className="course"
              key={i}
              // onClick={() => navigate("/courses")}
            >
              <img src={course.image} alt="" height={200} />

              <div className="course_info">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <div className="button-container">
                   <Link
                    to={`/${course.id}/courses`}
                    state={{ course }}
                    className="button button-primary text-decoration-none"
                  >
                    Learn More
                  </Link> 
                  
                  
                  <button
                    className="button-success"
                    onClick={() => handleAddToCart(course)}
                  >
                  Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
