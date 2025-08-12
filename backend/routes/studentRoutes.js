import express from "express";
import {
  getAllStudents,
  getStudentByRoll,
  createStudent
} from "../controllers/studentController.js";



const router = express.Router();

// ✅ Get all students (Admin use)
router.get("/", getAllStudents);

// ✅ Get student by roll number
router.get("/:rollno", getStudentByRoll);

// ✅ Create/Register new student
router.post("/register", createStudent);

export default router;
