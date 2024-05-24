import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <>
            <div className="categories">
                <div className="categories_container">
                    <div className="categories_left">
                        <h1>Categories</h1>
                        <p>
                        Explore our diverse categories tailored to suit your interests and ambitions. Whether you're delving into management strategies, blockchain innovations, web development, mobile applications, or graphic design, we've got you covered.
                        </p>
                        <Link
                            to="#"
                            className="button button-primary text-decoration-none category-btn"
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="categories_right">
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Management</h5>
                            <p>
                            Navigate the intricacies of effective leadership and organizational strategy.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                            Explore the transformative potential of decentralized technologies.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Web Development</h5>
                            <p>
                            Craft immersive digital experiences through coding and design.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Mobile Application</h5>
                            <p>
                            Innovate in the palm of your hand with mobile development.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Graphic Design</h5>
                            <p>
                            Capture attention and convey messages with visual storytelling.
                            </p>
                        </article>
                        <article className="category">
                            <span className="category_icon">
                                <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>
                            Explore the transformative potential of decentralized technologies.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
