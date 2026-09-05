import React from "react";
import Student from "./components/Student";
export default function App() {
  return (
    <div className="page">
      <h1 className="heading">Student Profiles</h1>
      <div className="container">
        <Student
          name="Ananya Sharma"
          course="B.Tech Computer Science"
          college="KIIT University"
        />
        <Student
          name="Rohan Verma"
          course="B.Sc Physics"
          college="Utkal University"
        />
        <Student
          name="Priya Nair"
          course="BBA"
          college="Xavier Institute of Management"
        />
      </div>
    </div>
  );
}
