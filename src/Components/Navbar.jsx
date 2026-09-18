import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  // Actual current date
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {weekday: "short",day: "2-digit",month: "short",year: "numeric",});
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <div className="logo-icon">
          <FaGraduationCap />
        </div>
        <div className="title-box">
          <h1>
            Student Management <span>System</span>
          </h1>
          <p>Add, manage and analyze your students easily</p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="date-box">
        <div className="calendar-icon">
          <FaCalendarAlt />
        </div>
        <div className="date-content">
          <h3>{date}</h3>
          <p>Keep Learning! 🚀</p>
        </div>
      </div>
    </nav>);};
export default Navbar;