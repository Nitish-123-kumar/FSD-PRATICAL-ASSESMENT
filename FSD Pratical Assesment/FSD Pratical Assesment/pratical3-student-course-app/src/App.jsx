import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import CourseDetail from "./pages/CourseDetail";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <h2>Student Course Management</h2>
      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <StudentProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* Dynamic route: /course/1, /course/2, etc. */}
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StudentProvider>
  );
}
