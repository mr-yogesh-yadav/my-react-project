import React, { useState } from "react";
import {FaUser,FaChartBar,FaGraduationCap,FaPlus,FaSyncAlt,
} from "react-icons/fa";
import "./StudentForm.css";
function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const getGrade = () => {
    if (marks === "") {
      return "";
    }
    const mark = Number(marks);
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 60) return "B";
    if (mark >= 33) return "C";
    return "F";
  };
const handleAddStudent = () => {
  if (!name || marks === "") {
    alert("Please enter student name and marks");
    return;
  }
  const newStudent = {id: Date.now(),name: name,marks: Number(marks),grade: getGrade(),
  };
  addStudent(newStudent);
  alert("Student Added!");setName("");setMarks("");
};
  return (
    <section className="student-form">
      <div className="form-heading">
        <div className="form-title">
          <div>
            <h2><span><FaUser /></span>Add / Update Student</h2>
            <p>Fill the details below and click on Add Student. Select a student to update.</p>
          </div>
        </div>
      </div>
      <div className="form-content">
        <div className="form-i-all">
        <div className="form-field">
          <label>Name</label>
          <div className="input-box">
            <FaUser />
            <input type="text" placeholder="Enter student name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="form-field">
          <label>Marks (out of 100)</label>
          <div className="input-box">
            <FaChartBar />
            <input type="text" placeholder="Enter marks (0-100)" min="0" max="100" value={marks} onChange={(e) => {if (e.target.value <= 100) {setMarks(e.target.value);}}}/>
          </div>
        </div>
        <div className="form-field">
          <label>Grade (Auto)</label>
          <div className="input-box grade-box">
            <FaGraduationCap />
            <input type="text" placeholder="Auto calculated" value={getGrade()} readOnly/>
          </div>
        </div>
    </div>
        <div className="form-buttons">
          <button className="add-btn"onClick={handleAddStudent}><FaPlus /> Add Student</button>
          <button className="update-btn"><FaSyncAlt />Update Student</button>
        </div>
      </div>
    </section>
  );
};
export default StudentForm;