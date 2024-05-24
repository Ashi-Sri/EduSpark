import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Category from "./Category";

import Faq from "./todo";
import Testimonials from "./Testimonials";

import { courses } from "./../constants/courses";
const handleDragStart = (e) => e.preventDefault();
 const items = [
    <img
        src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onDragStart={handleDragStart}
        // width={100}
        height={700}
        alt=""
        role="presentation"
    />,
    

    <img
        src="https://images.pexels.com/photos/6193740/pexels-photo-6193740.jpeg?cs=srgb&dl=pexels-ekaterina-bolovtsova-6193740.jpg&fm=jpg&_gl=1*1eshpj1*_ga*MTQzOTc2ODY0My4xNzE0NTc1MTM0*_ga_8JE65Q40S6*MTcxNjQ1MjgxMS42LjEuMTcxNjQ1MzgxNC4wLjAuMA.."
        onDragStart={handleDragStart}
        // width={100}
        height={700}
        role="presentation"
        alt=""
    />,
    <img
        src="https://images.pexels.com/photos/19559782/pexels-photo-19559782/free-photo-of-spiral-notebook-by-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onDragStart={handleDragStart}
        width={100}
        height={700}
        role="presentation"
        alt=""
    />,
 ];
const Home = () => {
    return (
        <>
            <AliceCarousel
                // mouseTracking
                // autoPlay
                items={items}
                // infinite
                // animationType="fadeout"
                // disableDotsControls
                // controlsStrategy="alternate"
                autoPlayStrategy="none"
                // autoPlayInterval={1000}
                // animationDuration={1000}
                // touchTracking={false}
                disableButtonsControls
                // className="mt-5"
            />
            <Container>
            <div className="header">
                <div className="header_container">
                    <div className="header_left">
                        <h1>Grow your skills to advance your career growth</h1>
                        <p>
                        Continuous skill development fuels career advancement, unlocking new opportunities along the way.
                        </p>
                        <Link
                            to="/courses"
                            className="button button-primary text-decoration-none"
                        >
                            Get Started
                        </Link>
                    </div>
                    {/* <div className="header_right-image">
                        <div className="header_right">
                            <img
                                src="https://img.freepik.com/premium-vector/education-technology-page-smartphone-page_316839-2330.jpg?w=2000"
                                alt=""
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            
            <Category />
            <Faq />
            <h2 className="text-center my-5"> Our Popular Courses</h2>
            <div className="container courses_container mt-2">
                {courses.map((course, i) => {
                    if (i < 3) {
                        return (
                            <div className="course" key={i}>
                                <img
                                    fluid={true}
                                    src={course.image}
                                    alt=""
                                    height={200}
                                    style={{ objectFit: "contain !important" }}
                                />

                                <div className="course_info">
                                    <h4>{course.title}</h4>
                                    <p>{course.description}</p>
                                    <Link
                                        to="/courses"
                                        state={{ course }}
                                        className="button button-primary text-decoration-none"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            
            <Testimonials />
            </Container>
        </>
    );
};

export default Home;
