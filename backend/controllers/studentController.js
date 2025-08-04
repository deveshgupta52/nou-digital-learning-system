
import bcrypt from 'bcryptjs';
import Student from '../models/Student.js';
import Login from '../models/Login.js';


export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getStudentByRoll = async (req, res) => {
  try {
    const student = await Student.findOne({ rollno: req.params.rollno });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();

    // ✅ Encrypt user-given password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // ✅ Create login using form password
    const login = new Login({
      userid: savedStudent.emailaddress,
      password: hashedPassword,
      usertype: 'student',
      status: 'active'
    });

    await login.save();

    res.status(201).json({
      message: 'Student and login created successfully',
      student: savedStudent
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
