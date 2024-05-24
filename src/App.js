import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import About from "./components/About";
import CoursesPreview from './components/CoursesPreview';
import Login from "./components/Login";
import Signup from "./components/Signup";
import CartPage from "./components/Cart";
import { CartProvider } from "./components/cartContext";
import "./App.css"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            document.querySelector(".nav").classList.toggle("window-scroll", window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
       <CartProvider>
         <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/:id/courses" element={isLoggedIn ? <CoursesPreview /> : <Login />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
       </CartProvider>
    );
};

export default App;


// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Courses from "./components/Courses";
// import About from "./components/About";
// import CoursesPreview from './components/CoursesPreview';
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import CartPage from "./components/Cart";
// import { CartProvider } from "./components/cartContext";
// import Quiz from "./components/Quiz";

// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             document.querySelector(".nav").classList.toggle("window-scroll", window.scrollY > 100);
//         };
//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const handleLogin = () => setIsLoggedIn(true);
//     const handleLogout = () => setIsLoggedIn(false);

//     return (
//        <CartProvider>
//          <BrowserRouter>
//             <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/courses" element={<Courses />} />
//                 <Route path="/:id/courses" element={isLoggedIn ? <CoursesPreview /> : <Login onLogin={handleLogin} />} />
//                 <Route path="/login" element={<Login onLogin={handleLogin} />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/quiz" element={<Quiz />} />
//             </Routes>
//             <Footer />
//         </BrowserRouter>
//        </CartProvider>
//     );
// };

// export default App;
