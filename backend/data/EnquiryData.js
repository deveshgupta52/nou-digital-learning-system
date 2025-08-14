import mongoose, { mongo } from "mongoose";
import enquiryModel from '../models/Enquiry.js';


const data = [
  {
    "name": "Rahul Sharma",
    "phone": 9876543210,
    "email": "rahul.sharma@example.com",
    "subject": "Course Inquiry",
    "message": "I would like to know more about the upcoming web development course.",
    "status": "New"
  },
  {
    "name": "Priya Verma",
    "phone": 9123456780,
    "email": "priya.verma@example.com",
    "subject": "Payment Issue",
    "message": "I have paid for the course but it still shows pending in my dashboard.",
    "status": "In Progress"
  },
  {
    "name": "Amit Kumar",
    "phone": 9811122233,
    "email": "amit.kumar@example.com",
    "subject": "Certificate Request",
    "message": "I completed the Python course and would like to request my certificate.",
    "status": "Resolved"
  },
  {
    "name": "Sneha Gupta",
    "phone": 9001234567,
    "email": "sneha.gupta@example.com",
    "subject": "Login Problem",
    "message": "I am unable to log in to my account after resetting my password.",
    "status": "New"
  },
  {
    "name": "Vikram Singh",
    "phone": 9786543210,
    "email": "vikram.singh@example.com",
    "subject": "Course Duration",
    "message": "Could you please tell me the duration and timings of the AI course?",
    "status": "New"
  },
  {
    "name": "Ritika Mehta",
    "phone": 9098765432,
    "email": "ritika.mehta@example.com",
    "subject": "Refund Request",
    "message": "I mistakenly enrolled in the wrong course and would like a refund.",
    "status": "In Progress"
  },
  {
    "name": "Karan Patel",
    "phone": 9812233445,
    "email": "karan.patel@example.com",
    "subject": "Course Materials",
    "message": "Where can I download the materials for the Data Science course?",
    "status": "Resolved"
  },
  {
    "name": "Shalini Nair",
    "phone": 9877654321,
    "email": "shalini.nair@example.com",
    "subject": "Batch Change",
    "message": "I would like to change my batch from evening to morning.",
    "status": "New"
  },
  {
    "name": "Rohit Yadav",
    "phone": 9934567890,
    "email": "rohit.yadav@example.com",
    "subject": "Technical Issue",
    "message": "The video lectures are not loading on my browser.",
    "status": "In Progress"
  },
  {
    "name": "Ananya Roy",
    "phone": 9876543201,
    "email": "ananya.roy@example.com",
    "subject": "Exam Date",
    "message": "When will the final exam for the Java course be scheduled?",
    "status": "Resolved"
  },
  {
    "name": "Harsh Malhotra",
    "phone": 9798123456,
    "email": "harsh.malhotra@example.com",
    "subject": "Discount Query",
    "message": "Is there any discount available for students enrolling in multiple courses?",
    "status": "New"
  },
  {
    "name": "Meera Joshi",
    "phone": 9012345678,
    "email": "meera.joshi@example.com",
    "subject": "Course Recommendation",
    "message": "Could you recommend a course for beginners in data analytics?",
    "status": "New"
  }
]


mongoose.connect('mongodb://127.0.0.1:27017/oesdb')
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

async function insertData() {
    try{
        await enquiryModel.deleteMany({});
        await enquiryModel.create(data);
        console.log("Data Inserted successfully");
    }
    catch(err) {
        console.log(err);
    }
}

insertData();