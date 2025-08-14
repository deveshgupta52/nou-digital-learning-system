import bcrypt from 'bcryptjs';
import Student from '../models/Student.js';
import Login from '../models/Login.js';
import { sendWelcomeEmail } from '../services/emailService.js';

// ✅ Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select('-password'); // password hide
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get student by roll number
export const getStudentByRoll = async (req, res) => {
  try {
    
    const student = await Student.findOne({emailaddress : req.params.email}).select('-password');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Register/Create student
export const createStudent = async (req, res) => {
  try {
    const { emailaddress, password } = req.body;

    // 🔹 Check duplicate email in Student table
    const existingStudent = await Student.findOne({ emailaddress });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 🔹 Check duplicate login record
    const existingLogin = await Login.findOne({ userid: emailaddress });
    if (existingLogin) {
      return res.status(400).json({ message: "Login already exists for this email" });
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Save Student (hashed password in DB for safety)
    const student = new Student({ ...req.body, password: hashedPassword });
    const savedStudent = await student.save();

    // 🔹 Save login record
    const login = new Login({
      userid: emailaddress,
      password: hashedPassword,
      usertype: 'student',
      status: 'active'
    });
    await login.save();
    await sendWelcomeEmail(savedStudent);
    

    res.status(201).json({
      message: 'Student and login created successfully',
      student: savedStudent
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  console.log("hello")
};
