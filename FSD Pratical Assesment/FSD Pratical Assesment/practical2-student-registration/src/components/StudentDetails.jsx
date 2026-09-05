import React from "react";
export default function StudentDetails({ student }) {
  if (!student) return null;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 mt-6 border-l-4 border-indigo-600">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">
        Submitted Details
      </h2>
      <p className="text-slate-600 text-sm mb-1">
        <span className="font-medium text-slate-800">Name:</span>{" "}
        {student.name}
      </p>
      <p className="text-slate-600 text-sm mb-1">
        <span className="font-medium text-slate-800">Email:</span>{" "}
        {student.email}
      </p>
      <p className="text-slate-600 text-sm">
        <span className="font-medium text-slate-800">Course:</span>{" "}
        {student.course}
      </p>
    </div>
  );
}
