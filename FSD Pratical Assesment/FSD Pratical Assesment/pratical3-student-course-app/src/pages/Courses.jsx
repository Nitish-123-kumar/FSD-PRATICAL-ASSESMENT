import React from "react";
import { Link } from "react-router-dom";
import courses from "../courseData";
import { useStudent } from "../context/StudentContext";

export default function Courses() {
  const { student } = useStudent();

  return (
    <div className="page">
      <div className="student-banner">
        Browsing as <strong>{student.name}</strong>
      </div>
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="course-card"
          >
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <span className="badge">{course.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
