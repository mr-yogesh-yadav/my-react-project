import React from "react";

import { FaBolt, FaUsers, FaCheckCircle, FaTimesCircle, FaTrophy, FaChartBar, FaBook, FaInfoCircle, FaCheck,
} from "react-icons/fa";
import "./About.css";
function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* =========================
            QUICK ACTIONS
        ========================= */}
        <div className="about-card">
          <div className="about-card-heading">
            <FaBolt className="heading-icon quick-icon" />
            <div>
              <h2>Quick Actions</h2>
              <p>Perform useful operations</p>
            </div>
          </div>
          <div className="quick-actions">
            <button className="quick-btn"><FaUsers /><span>Show All Students</span></button>
            <button className="quick-btn"><FaCheckCircle /><span>Show Passed Students</span></button>
            <button className="quick-btn"><FaTimesCircle /><span>Show Failed Students</span></button>
            <button className="quick-btn"><FaTrophy /><span>Show Topper</span></button>
            <button className="quick-btn"><FaChartBar /><span>Calculate Average</span></button>
          </div>
        </div>
        {/* =========================
            GRADE CRITERIA
        ========================= */}
        <div className="about-card">
          <div className="about-card-heading">
            <FaBook className="heading-icon grade-icon" />
            <div>
              <h2>Grade Criteria</h2>
              <p>Marks range and corresponding grade</p>
            </div>
          </div>
          <div className="grade-table">
            <div className="grade-row grade-header">
              <div>Marks Range</div>
              <div>Grade</div>
            </div>
            <div className="grade-row">
              <div>90 - 100</div>
              <div>
                <span className="grade-badge grade-a">A</span>
              </div>
            </div>
            <div className="grade-row">
              <div>80 - 89</div>
              <div>
                <span className="grade-badge grade-b">B</span>
              </div>
            </div>
            <div className="grade-row">
              <div>60 - 79</div>
              <div>
                <span className="grade-badge grade-c">C</span>
              </div>
            </div>
            <div className="grade-row">
              <div>33 - 59</div>
              <div>
                <span className="grade-badge grade-d">D</span>
              </div>
            </div>
            <div className="grade-row">
              <div>0 - 32</div>
              <div>
                <span className="grade-badge grade-f">F</span>
              </div>
            </div>
          </div>
        </div>
        {/* =========================
            ABOUT
        ========================= */}
        <div className="about-card">
          <div className="about-card-heading">
            <FaInfoCircle className="heading-icon info-icon" />
            <div>
              <h2>About</h2>
              <p>A simple project to practice JavaScript concepts</p>
            </div>
          </div>
          <div className="about-points">
            <div className="about-point"><FaCheck /><span>Use of Functions</span></div>
            <div className="about-point"><FaCheck /><span>Array Methods (push, filter, map, reduce, etc.)</span></div>
            <div className="about-point"><FaCheck /><span>Search, Edit, Delete</span></div>
            <div className="about-point"><FaCheck /><span>Conditional Logic (if/else, switch)</span></div>
            <div className="about-point"><FaCheck /><span>Real-time Calculations</span></div>
            <div className="about-point"><FaCheck /><span>Clean and Responsive UI</span></div></div>
          <div className="about-quote"><strong>“Practice turns knowledge into skill.”</strong><p>— Keep Coding 🚀</p></div>
        </div>
      </div>
    </section>
  );
}
export default About;