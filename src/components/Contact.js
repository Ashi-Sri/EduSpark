import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="container mt-3">
            <h2
                className="text-black text-center"
                style={{ marginTop: "8rem" }}
            >
                Contact Us
            </h2>
            <div className="contact_container my-3">
                <div className="contact_aside">
                    <h5 className="my-3">Lets get in touch!</h5>
                    <p className="text-secondary">
                    Feel free to reach out to us for any inquiries or assistance. We're here to help!
                    </p>
                    <ul className="contact_details">
                        <li>
                            <i className="uil uil-phone-times text-dark"></i>
                            <h6 className="text-secondary">+914584555215</h6>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <h6 className="text-secondary">
                                ashi@gmail.com
                            </h6>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <h6 className="text-secondary">
                                Punjab,India
                            </h6>
                        </li>
                    </ul>

                    <h5>Connect With Us</h5>
                    <ul className="contact_socials">
                        <li>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-facebook"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-instagram-alt"></i>
                            </a>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="uil uil-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <form
                    action="https://formspree.io/f/xjvzqnow"
                    className="contact_form"
                    method="POST"
                >
                    <div className="form_name">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="First Name"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="Last Name"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Your Email Address"
                        name="Email Address"
                        required
                    />
                    <textarea
                        rows="5"
                        name="Message"
                        placeholder="Message"
                        required
                    ></textarea>
                    <div style={{ textAlign: "center" }}>
                        <button
                            type="submit"
                            className="button button-primary "
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
