const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err))

// Mongoose Student schema and model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true }
}, { timestamps: true })

const Student = mongoose.model('Student', studentSchema)

// Routes and CRUD operations

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System API')
})

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get student by ID
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(404).json({ message: 'Student not found' })
    res.json(student)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Create a new student
app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.status(201).json(newStudent)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Update a student
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' })
    res.json(updatedStudent)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Delete a student
app.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id)
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' })
    res.json({ message: 'Student deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Start server
const PORT = 3000
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
