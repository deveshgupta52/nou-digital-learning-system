import express from "express";
import {
  getAllStudents,
  getStudentByRoll,
  createStudent
} from "../controllers/studentController.js";
import Student from '../models/Student.js'

const router = express.Router();

// ✅ Get all students (Admin use)
router.get("/", getAllStudents);

// Count the number of students
router.get('/count', async (req,res) => {
  const totalCount = await Student.countDocuments();
  res.json({
    "msg" : "success",
    "count" : totalCount
  });
});

// ✅ Get student by roll number
router.get("/:rollno", getStudentByRoll);

// ✅ Create/Register new student
router.post("/register", createStudent);

router.put('/:id', async (req,res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
})

router.delete('/:id', async (req,res) => {
  await Student.findByIdAndDelete(req.params.id);
})

export default router;
