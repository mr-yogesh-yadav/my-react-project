import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaSave, FaTimes, } from "react-icons/fa";
import "./StudentList.css";
function StudentList({ students, onUpdateStudent, onDeleteStudent }) {
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", marks: "" });
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 60) return "B";
    if (marks >= 33) return "C";
    return "F";
  };
  const getStatus = (marks) => {
    if (marks >= 33) {
      return "Pass";
    }
    return "Fail";
  };
  const handleEditClick = (student) => {
    setEditingId(student.id);
    setEditForm({ name: student.name, marks: student.marks });
  };
  const handleCancelClick = () => {
    setEditingId(null);
    setEditForm({ name: "", marks: "" });
  };
  const handleSaveClick = (id) => {
    const updatedMarks = Number(editForm.marks);
    if (editForm.name.trim() === "" || editForm.marks === "" || isNaN(updatedMarks) || updatedMarks < 0 || updatedMarks > 100) {
      alert("Please enter valid name and marks (0-100).");
      return;
    }
    onUpdateStudent(id, { name: editForm.name.trim(), marks: updatedMarks });
    setEditingId(null);
    setEditForm({ name: "", marks: "" });
  };
  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) {
      return;
    }
    onDeleteStudent(id);
  };
  return (
    <section className="student-list">
      <div className="search-area">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button className="clear-btn" onClick={() => setSearch("")}>Clear</button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => {
              const isEditing = editingId === student.id;
              const grade = getGrade(student.marks);
              const status = getStatus(student.marks);
              return (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    {isEditing ? (
                      <input type="text" className="edit-input" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />) : (student.name)}
                  </td>
                  <td>
                    {isEditing ? (
                      <input type="number" className="edit-input" min="0" max="100" value={editForm.marks} onChange={(e) => setEditForm({ ...editForm, marks: e.target.value })} />) : (student.marks)}
                  </td>
                  <td><span className={`grade grade-${grade}`}>{grade}</span>
                  </td>
                  <td>
                    <span className={`status ${status === "Pass" ? "status-pass" : "status-fail"}`}>{status}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      {isEditing ? (
                        <>
                          <button className="save-btn" onClick={() => handleSaveClick(student.id)}><FaSave />Save</button>
                          <button className="cancel-btn" onClick={handleCancelClick}><FaTimes />Cancel</button>
                        </>) : (<>
                          <button className="edit-btn" onClick={() => handleEditClick(student)}><FaEdit />Edit</button>
                          <button className="delete-btn" onClick={() => handleDeleteClick(student.id)}><FaTrash />Delete</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="6" className="no-student">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentList;