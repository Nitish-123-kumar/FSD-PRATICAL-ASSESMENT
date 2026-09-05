import React from "react";
import { useStudent } from "../context/StudentContext";

export default function About() {
  const { student, updateStudentName } = useStudent();
  const [nameInput, setNameInput] = React.useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updateStudentName(nameInput.trim());
      setNameInput("");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>About This App</h1>
        <p>
          This mini project demonstrates React Router for multi-page
          navigation, dynamic routes for course details, and the Context API
          for sharing student data across every page without prop drilling.
        </p>
        <p>
          Current student in context: <strong>{student.name}</strong> (
          {student.id})
        </p>

        <form onSubmit={handleUpdate} style={{ marginTop: "16px" }}>
          <label htmlFor="nameUpdate" style={{ display: "block", marginBottom: "6px" }}>
            Update student name (shared via Context):
          </label>
          <input
            id="nameUpdate"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter new name"
          />
          <button
            type="submit"
            style={{
              marginLeft: "8px",
              padding: "8px 14px",
              background: "#4338ca",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
