import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import StudentForm from "./Components/StudentForm";
import PassingStatus from "./Components/PassingStatus";
import StudentList from "./Components/StudentList";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {
  const [students, setStudents] = useState([]);
  // =========================
  // ADD STUDENT
  // =========================
  const addStudent = (student) => {setStudents((prevStudents) => [...prevStudents,student]);};
  // =========================
  // UPDATE STUDENT
  // =========================
  const updateStudent = (id, updatedData) => {setStudents((prevStudents) =>prevStudents.map((student) =>student.id === id? {...student,...updatedData}: student));};
  // =========================
  // DELETE STUDENT
  // =========================
  const deleteStudent = (id) => {setStudents((prevStudents) =>prevStudents.filter((student) => student.id !== id));};
  return (
    <>
    <Navbar />
    <StudentForm addStudent={addStudent}/>
    <PassingStatus students={students}/>
    <StudentList students={students}onUpdateStudent={updateStudent}onDeleteStudent={deleteStudent} />
    <About/>
    <Footer/>
    </>
  );
}

export default App;