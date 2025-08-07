import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import student_route from './routes/studentRoutes.js'
import adminRoute from './routes/Adminroutes.js';

dotenv.config()
const app=express();
app.use(cors())
app.use(express.json())
app.use('/api/students',student_route)
app.use('/api/admin',adminRoute)
connectDB()


const port= process.env.port || 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})