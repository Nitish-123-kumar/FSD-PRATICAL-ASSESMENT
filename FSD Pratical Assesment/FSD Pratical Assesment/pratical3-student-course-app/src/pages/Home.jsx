import React from "react";
import { useStudent } from "../context/StudentContext";

export default function Home() {
  const { student } = useStudent();

  return (
    <div className="page">
      <div className="student-banner">
        Welcome back, <strong>{student.name}</strong> ({student.id}) —{" "}
        {student.program}
      </div>
      <div className="card">
        <h1>Student Course Management</h1>
        <p>
          This application lets you browse available courses, view detailed
          information for each course, and keep track of your student
          profile — all shared across pages using React's Context API.
        </p>
        <p>
          Use the navigation bar above to explore the <strong>Courses</strong>{" "}
          page or learn more <strong>About</strong> this project.
        </p>
      </div>
    </div>
  );
}
