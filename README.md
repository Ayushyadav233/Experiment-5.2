# Student Management System

A simple **Node.js + Express + MongoDB** application for managing students using **MVC structure**.

---

## 🧾 Features

- Create a student
- Read all students
- Read a student by ID
- Update a student
- Delete a student

---

## 📁 Folder Structure

StudentManagement/
├── controllers/
│ └── studentController.js
├── models/
│ └── Student.js
├── routes/
│ └── studentRoutes.js
├── server.js
├── package.json
└── README.md

yaml
Copy code

---

## 🧩 Data Model

### Student Schema

```json
{
  "name": "String",
  "age": "Number",
  "course": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
⚡ API Endpoints
Base URL: http://localhost:3000/students

Method	Endpoint	Description
GET	/	Get all students
GET	/:id	Get student by ID
POST	/	Create a new student
PUT	/:id	Update a student
DELETE	/:id	Delete a student

🚀 Setup Instructions
Install dependencies:

bash
Copy code
npm install
Start MongoDB locally on default port (27017).

Run the server:

bash
Copy code
node server.js
Open Postman or browser to test API:

GET /students → List all students

POST /students → Add new student

PUT /students/:id → Update student

DELETE /students/:id → Delete student

