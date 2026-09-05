import React from "react";
export default function Student({ name, course, college }) {
  return (
    <div className="card">
      <div className="avatar">{name.charAt(0)}</div>
      <h2 className="name">{name}</h2>
      <p className="detail">
        <span className="label">Course:</span> {course}
      </p>
      <p className="detail">
        <span className="label">College:</span> {college}
      </p>
    </div>
  );
}
