import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import student_route from './routes/studentRoutes.js'
import adminRoute from './routes/Adminroutes.js';
import courseRoute from './routes/courseRoute.js';
import resultRoute from './routes/resultRoute.js';
import enquiryRoute from './routes/enquiryRoute.js';


dotenv.config()
const app=express();
app.use(express.json())

app.use(cors())
app.use('/students',student_route);
app.use('/admin', adminRoute);
app.use('/enquiry', enquiryRoute);
app.use('/result', resultRoute);
app.use('/courses', courseRoute);
connectDB()


const port= process.env.port || 3000;


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})