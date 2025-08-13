import express from "express";
const courseRoute = express.Router();
import courseModel from "../models/courseModel.js";


// Courses List

courseRoute.get('', async (req, res) => {
    const courses = await courseModel.find();
    res.json({
        "msg" : "success",
        "data" : courses
    });
});

// count the number of courses

courseRoute.get('/count',async (req,res) => {
    const courseCount = await courseModel.countDocuments();
    res.json({
        "msg" : "success",
        "count" : courseCount
    });
});

// To Find particular course
courseRoute.get('/:code', async (req, res) => {
    const code = req.params.code;
    const course = await courseModel.find({
        courseCode : code
    });
    res.json({
        "msg" : "success",
        "data" : course
    });
});


// To ADD the new Course
courseRoute.post('', async (req,res) => {
    const courses = req.body.courses;
    const course = await courseModel.insertMany(courses);

    res.json({
        "msg" : "success",
        "data" : course
    });
});

// To Update Course details

courseRoute.put('/:code', async (req,res) => {
    const code = req.params.code;
    await courseModel.findOneAndUpdate({
        courseCode : code
    },

    {
        courseCode : code,
        courseName : req.body.name,
        Duration : req.body.Duration
    }, 

    {
        new : true
    });

    res.json({
        "msg" : "Updation Successfull"    
    });
});



// Delete Route

courseRoute.delete('/:code', async (req, res) => {
    const code = req.params.code;
    await courseModel.deleteOne({
        courseCode : code
    });
    res.json({
        "msg" : "Deletion Successfull"
    });
});



export default courseRoute;