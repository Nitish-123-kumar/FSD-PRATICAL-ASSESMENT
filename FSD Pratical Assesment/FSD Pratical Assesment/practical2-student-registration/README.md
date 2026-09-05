# Practical 2: Student Registration Form (State, Forms & Styling)

## Structure
```
practical2-student-registration/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── StudentForm.jsx
        └── StudentDetails.jsx
```

## What it demonstrates
- `StudentForm.jsx` — uses **useState** to manage `name`, `email`, and `course` as controlled inputs (`value` + `onChange`), and calls `onSubmit` with the data when the form is submitted.
- `StudentDetails.jsx` — a presentational component that displays the submitted student details, received as a prop.
- `App.jsx` — lifts state up: holds the submitted student and passes it down to `StudentDetails`.
- Styling done with **Tailwind CSS** (configured via `tailwind.config.js` / `postcss.config.js`).

## Run it
```bash
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).
