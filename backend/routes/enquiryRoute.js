import express from 'express';
import enquiryModel from '../models/Enquiry.js';
const enquiryRoute = express.Router();


enquiryRoute.get('', async (req,res) => {
    let data = await enquiryModel.find();
    res.json({
        "msg" : "success",
        "data" : data
    });
});[
  {
    "name": "Rahul Sharma",
    "gender": "Male",
    "address": "123 MG Road, Delhi",
    "contactNo": 9876543210,
    "email": "rahul.sharma@example.com",
    "enquiryText": "I want to know more about your training programs.",
    "enquiryDate": "2025-08-01T10:30:00Z"
  },
  {
    "name": "Priya Mehta",
    "gender": "Female",
    "address": "45 Park Avenue, Mumbai",
    "contactNo": 9988776655,
    "email": "priya.mehta@example.com",
    "enquiryText": "Please send me the brochure for the new course.",
    "enquiryDate": "2025-08-02T09:15:00Z"
  },
  {
    "name": "Amit Verma",
    "gender": "Male",
    "address": "78 Civil Lines, Lucknow",
    "contactNo": 9123456780,
    "email": "amit.verma@example.com",
    "enquiryText": "Is there any discount for early registration?",
    "enquiryDate": "2025-08-03T14:45:00Z"
  },
  {
    "name": "Neha Kapoor",
    "gender": "Female",
    "address": "56 Connaught Place, Delhi",
    "contactNo": 9765432109,
    "email": "neha.kapoor@example.com",
    "enquiryText": "I want details about the weekend batch.",
    "enquiryDate": "2025-08-04T16:20:00Z"
  },
  {
    "name": "Rohit Singh",
    "gender": "Male",
    "address": "12 Residency Road, Bangalore",
    "contactNo": 9845123456,
    "email": "rohit.singh@example.com",
    "enquiryText": "Can I attend a demo class before enrolling?",
    "enquiryDate": "2025-08-05T11:00:00Z"
  },
  {
    "name": "Ananya Gupta",
    "gender": "Female",
    "address": "90 Salt Lake, Kolkata",
    "contactNo": 9876012345,
    "email": "ananya.gupta@example.com",
    "enquiryText": "Please provide the list of trainers.",
    "enquiryDate": "2025-08-06T08:45:00Z"
  },
  {
    "name": "Vikram Chauhan",
    "gender": "Male",
    "address": "33 Sector 22, Chandigarh",
    "contactNo": 9811122233,
    "email": "vikram.chauhan@example.com",
    "enquiryText": "What is the course duration and fees?",
    "enquiryDate": "2025-08-07T15:10:00Z"
  },
  {
    "name": "Sakshi Malhotra",
    "gender": "Female",
    "address": "77 GT Road, Amritsar",
    "contactNo": 9998887776,
    "email": "sakshi.malhotra@example.com",
    "enquiryText": "Do you offer online classes?",
    "enquiryDate": "2025-08-08T12:35:00Z"
  },
  {
    "name": "Karan Patel",
    "gender": "Male",
    "address": "101 SG Highway, Ahmedabad",
    "contactNo": 9825098250,
    "email": "karan.patel@example.com",
    "enquiryText": "What are the prerequisites for joining?",
    "enquiryDate": "2025-08-09T17:50:00Z"
  },
  {
    "name": "Isha Reddy",
    "gender": "Female",
    "address": "14 Banjara Hills, Hyderabad",
    "contactNo": 9866012345,
    "email": "isha.reddy@example.com",
    "enquiryText": "Kindly share the class timings.",
    "enquiryDate": "2025-08-10T09:05:00Z"
  }
]


enquiryRoute.get('/:email', async (req, res) => {
    const data = await enquiryModel.find({
        email : req.params.email
    });
    res.json({
        "msg" : "success",
        "data" : data
    });
});

enquiryRoute.post('', async (req, res) => {
    const data = await enquiryModel.create(req.body);
    res.json({
        "msg" : "success",
        "data" : data
    });
});


enquiryRoute.delete('/:email', async (req, res) => {
    await enquiryModel.findOneAndDelete({
        email : req.params.email
    });
    res.json({
        "msg" : "success"
    });
});



export default enquiryRoute;


