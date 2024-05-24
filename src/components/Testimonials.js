import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { testimonials } from "../constants/testimonials";
const Testimonials = () => {
    return (
        <div className="container testimonials_container swiper ">
            <h2 className="testimonial_title ">Students Testimonials</h2>

            <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={50}
                pagination={{ clickable: true }}
                slidesPerView={1}
                breakpoints={{
                    
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 150,
                    },

                    600: {
                        slidesPerView: 1,
                        spaceBetween: 200,
                    },
                }}
            >
                {testimonials.map((testimonial, i) => (
                    <SwiperSlide key={i}>
                        <div className="testimonial">
                            <div className="avatar">
                                <img
                                    src={testimonial.image}
                                    className="image-swipe "
                                    alt=""
                                />
                            </div>

                            <div className="testimonial_info">
                                <h5> {testimonial.name}</h5>
                                <small> {testimonial.designation}</small>
                            </div>
                            <div className="testimonial_body">
                                <p>{testimonial.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
