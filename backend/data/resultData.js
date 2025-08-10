import mongoose from "mongoose";
import resultModel from "../models/Result.js";


const data = [
    {
        rollno: 101,
        courseName: "Full Stack Development",
        totalMark: 500,
        getMark: 450,
        examDate: "2025-08-08"
    },
    {
        rollno: 102,
        courseName: "Data Science & ML",
        totalMark: 600,
        getMark: 540,
        examDate: "2025-08-07"
    },
    {
        rollno: 103,
        courseName: "Cloud Computing",
        totalMark: 400,
        getMark: 350,
        examDate: "2025-08-06"
    },
    {
        rollno: 104,
        courseName: "Cybersecurity",
        totalMark: 500,
        getMark: 420,
        examDate: "2025-08-05"
    },
    {
        rollno: 105,
        courseName: "Artificial Intelligence",
        totalMark: 700,
        getMark: 650,
        examDate: "2025-08-04"
    },
    {
        rollno: 106,
        courseName: "Mobile App Development",
        totalMark: 450,
        getMark: 400,
        examDate: "2025-08-03"
    },
    {
        rollno: 107,
        courseName: "DevOps & CI/CD",
        totalMark: 300,
        getMark: 280,
        examDate: "2025-08-02"
    },
    {
        rollno: 108,
        courseName: "Blockchain Technology",
        totalMark: 500,
        getMark: 470,
        examDate: "2025-08-01"
    }
];

mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));


async function inserData () {
    try {
        await resultModel.deleteMany({});
        console.log("Deleted");
        await resultModel.create(data);
        console.log("Data inserted successfully");
    }
    catch (err) {
        console.log(err);
    }
    
}

inserData();