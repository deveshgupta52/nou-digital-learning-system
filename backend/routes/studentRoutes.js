import express from 'express'
import {
  createStudent,
  getAllStudents,
  getStudentByRoll
} from '../controllers/studentController.js';


const router= express.Router();

router.post('/', createStudent);          //ye student create karega
router.get('/', getAllStudents);           //ye saare student ka data dega  
router.get('/:rollno', getStudentByRoll);   //ye rollno. se student data dega


export default router