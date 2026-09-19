import React from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";
import "./PassingStatus.css";
function PassingStatus({ students }) {
  const pass = students.filter((student) => student.marks >= 33);
  const fail = students.filter((student) => student.marks < 33);
  const average =
    students.length > 0
      ? Math.round(
          students.reduce((total, student) => total + student.marks, 0) /
            students.length,
        )
      : 0;
  const highest =
    students.length > 0
      ? Math.max(...students.map((student) => student.marks))
      : 0;
  const lowest =
    students.length > 0
      ? Math.min(...students.map((student) => student.marks))
      : 0;
  return (
    <section className="passing-status">
      <div className="status-card total-card">
        <div className="status-icon">
          <FaUsers />
        </div>
        <h2>{students.length}</h2>
        <p>Total Students</p>
      </div>
      <div className="status-card passed-card">
        <div className="status-icon">
          <FaCheckCircle />
        </div>
        <h2>{pass.length}</h2>
        <p>Passed</p>
      </div>
      <div className="status-card failed-card">
        <div className="status-icon">
          <FaTimesCircle />
        </div>
        <h2>{fail.length}</h2>
        <p>Failed</p>
      </div>
      <div className="status-card average-card">
        <div className="status-icon">
          <FaStar />
        </div>
        <h2>{average}</h2>
        <p>Average Marks</p>
      </div>
      <div className="status-card highest-card">
        <div className="status-icon">
          <FaTrophy />
        </div>
        <h2>{highest}</h2>
        <p>Highest Marks</p>
      </div>
      <div className="status-card lowest-card">
        <div className="status-icon">
          <FaChartLine />
        </div>
        <h2>{lowest}</h2>
        <p>Lowest Marks</p>
      </div>
    </section>
  );
}
export default PassingStatus;
