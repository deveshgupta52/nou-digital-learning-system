import mongoose from "mongoose";
import Login from '../models/Login.js';

const data = [
  {
    userid: "abhay@example.com",
    password: "password1",
    usertype: "student",
    status: "active"
  },
  {
    userid: "priya@example.com",
    password: "password2",
    usertype: "student",
    status: "active"
  },
  {
    userid: "amit@example.com",
    password: "password3",
    usertype: "student",
    status: "active"
  },
  {
    userid: "neha@example.com",
    password: "password4",
    usertype: "student",
    status: "active"
  },
  {
    userid: "ravi@example.com",
    password: "password5",
    usertype: "student",
    status: "active"
  }
];


mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));



async function insertData() {
    try{
    await Login.deleteMany({});
    
    console.log("Data inserted");
    }
    catch(err){
        console.log(err);
    }
}

insertData();