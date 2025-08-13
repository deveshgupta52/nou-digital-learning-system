import mongoose from 'mongoose';
import courseModel from '../models/courseModel.js';

const courseData = [
  {
    "courseCode": "C101",
    "courseName": "Full Stack Web Development",
    "duration": "6 Months"
  },
  {
    "courseCode": "C102",
    "courseName": "Data Science & Machine Learning",
    "duration": "8 Months"
  },
  {
    "courseCode": "C103",
    "courseName": "Cloud Computing with AWS",
    "duration": "5 Months"
  },
  {
    "courseCode": "C104",
    "courseName": "Cybersecurity Fundamentals",
    "duration": "4 Months"
  },
  {
    "courseCode": "C105",
    "courseName": "Artificial Intelligence",
    "duration": "7 Months"
  },
  {
    "courseCode": "C106",
    "courseName": "Mobile App Development (Flutter)",
    "duration": "6 Months"
  },
  {
    "courseCode": "C107",
    "courseName": "DevOps & CI/CD",
    "duration": "3 Months"
  },
  {
    "courseCode": "C108",
    "courseName": "Blockchain Technology",
    "duration": "5 Months"
  },
  {
    "courseCode": "C109",
    "courseName": "UI/UX Design",
    "duration": "3 Months"
  },
  {
    "courseCode": "C110",
    "courseName": "Big Data Analytics",
    "duration": "6 Months"
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