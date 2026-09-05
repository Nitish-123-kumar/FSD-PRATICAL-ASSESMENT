import React, { createContext, useContext, useState } from "react";
const StudentContext = createContext(null);
export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "E Biswajit Patra",
    id: "24CSE100",
    program: "B.Tech Computer Science",
  });

  const updateStudentName = (newName) => {
    setStudent((prev) => ({ ...prev, name: newName }));
  };

  return (
    <StudentContext.Provider value={{ student, updateStudentName }}>
      {children}
    </StudentContext.Provider>
  );
}
export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
}
