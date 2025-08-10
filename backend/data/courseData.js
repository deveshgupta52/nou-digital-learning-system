import mongoose from 'mongoose';
import courseModel from '../models/courseModel.js';

const courseData =[
  {
    "courseCode": "C101",
    "courseName": "Full Stack Web Development",
    "Duration": "6 Months"
  },
  {
    "courseCode": "C102",
    "courseName": "Data Science & Machine Learning",
    "Duration": "8 Months"
  },
  {
    "courseCode": "C103",
    "courseName": "Cloud Computing with AWS",
    "Duration": "5 Months"
  },
  {
    "courseCode": "C104",
    "courseName": "Cybersecurity Fundamentals",
    "Duration": "4 Months"
  },
  {
    "courseCode": "C105",
    "courseName": "Artificial Intelligence",
    "Duration": "7 Months"
  },
  {
    "courseCode": "C106",
    "courseName": "Mobile App Development (Flutter)",
    "Duration": "6 Months"
  },
  {
    "courseCode": "C107",
    "courseName": "DevOps & CI/CD",
    "Duration": "3 Months"
  },
  {
    "courseCode": "C108",
    "courseName": "Blockchain Technology",
    "Duration": "5 Months"
  },
  {
    "courseCode": "C109",
    "courseName": "UI/UX Design",
    "Duration": "3 Months"
  },
  {
    "courseCode": "C110",
    "courseName": "Big Data Analytics",
    "Duration": "6 Months"
  }
];

mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
. catch((err) => console.log(err));




async function insertData () {
    try {
      await courseModel.deleteMany({});
        await courseModel.create(courseData);
        console.log("Data Inserted Successfull");
    }
    catch(err) {
        console.log(err);
    }
}

insertData();