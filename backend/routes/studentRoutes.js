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
router.get("/:email", getStudentByRoll);

// ✅ Create/Register new student
router.post("/register", createStudent);

router.put('/:id', async (req,res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedStudent) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json({ message: 'Student updated successfully', student: updatedStudent });
})

router.post('/upload-image/:email', async (req, res) => {
  try {
    const { image } = req.body;
    const updatedStudent = await Student.findOneAndUpdate({ emailaddress: req.params.email }, { profileImage: image }, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Image uploaded successfully', student: updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req,res) => {
  await Student.findByIdAndDelete(req.params.id);
})

export default router;
