# Student Course Management Application

A small multi-page React app demonstrating React Router and the Context API.

## Features
- **Pages:** Home, Courses, About
- **Routing:** React Router (`react-router-dom`) with a navbar and active-link styling
- **Dynamic routes:** `/course/:id` — try `/course/1`, `/course/2`, `/course/3`
- **Context API:** `StudentContext` shares student info (name, ID, program) across every page without prop drilling, and lets the About page update the name
- **Functional components + JSX** throughout

## Project structure
```
student-course-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── courseData.js
    ├── context/
    │   └── StudentContext.jsx
    └── pages/
        ├── Home.jsx
        ├── Courses.jsx
        ├── CourseDetail.jsx
        └── About.jsx
```

## Run it locally
```bash
npm install
npm run dev
```
Then open the printed local URL (usually `http://localhost:5173`).
