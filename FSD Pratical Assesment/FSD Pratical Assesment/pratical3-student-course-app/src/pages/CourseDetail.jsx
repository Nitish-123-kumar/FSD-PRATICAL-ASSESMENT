import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../courseData";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="page">
        <div className="card">
          <h2>Course not found</h2>
          <Link to="/courses" className="back-link">
            &larr; Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <h1>{course.title}</h1>
        <span className="badge">{course.duration}</span>
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p>{course.description}</p>
        <Link to="/courses" className="back-link">
          &larr; Back to Courses
        </Link>
      </div>
    </div>
  );
}
