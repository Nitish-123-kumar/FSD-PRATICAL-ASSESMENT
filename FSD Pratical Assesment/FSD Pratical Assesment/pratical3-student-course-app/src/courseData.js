// Shared course data used by both the Courses list page and the dynamic
// course detail route (/course/:id)
const courses = [
  {
    id: "1",
    title: "Data Structures & Algorithms",
    instructor: "Dr. Meera Iyer",
    duration: "12 weeks",
    description:
      "Covers arrays, linked lists, trees, graphs, sorting, and searching algorithms with practical coding exercises.",
  },
  {
    id: "2",
    title: "Web Development with React",
    instructor: "Prof. Arjun Rao",
    duration: "8 weeks",
    description:
      "Learn component-based UI development, hooks, routing, and state management using React.",
  },
  {
    id: "3",
    title: "Database Management Systems",
    instructor: "Dr. Kavita Nair",
    duration: "10 weeks",
    description:
      "Explores relational database design, SQL, normalization, and transaction management.",
  },
];

export default courses;
