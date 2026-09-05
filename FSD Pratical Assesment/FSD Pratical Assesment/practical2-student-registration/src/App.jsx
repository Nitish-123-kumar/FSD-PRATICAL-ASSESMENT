import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

export default function App() {

  const [submittedStudent, setSubmittedStudent] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-12 px-4">
      <StudentForm onSubmit={setSubmittedStudent} />
      <StudentDetails student={submittedStudent} />
    </div>
  );
}
