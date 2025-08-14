import mongoose, { mongo } from 'mongoose';
import Student from '../models/Student.js';

mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));


const data = [
  {
    rollno: 100001,
    name: "Abhay Kumar",
    fname: "Rajesh Kumar",
    mname: "Sunita Devi",
    gender: "Male",
    dob: "1998-05-15",
    address: "123, Main Street, Lucknow, UP",
    program: "B.Tech",
    branch: "CSE",
    year: "2022",
    contactno: "9876543210",
    emailaddress: "abhay@example.com",
    password: "password1",
    regdate: "2022-08-01"
  },
  {
    rollno: 100002,
    name: "Priya Sharma",
    fname: "Ramesh Sharma",
    mname: "Kavita Sharma",
    gender: "Female",
    dob: "1999-07-20",
    address: "456, Civil Lines, Delhi",
    program: "B.Tech",
    branch: "ECE",
    year: "2023",
    contactno: "9123456789",
    emailaddress: "priya@example.com",
    password: "password2",
    regdate: "2023-08-01"
  },
  {
    rollno: 100003,
    name: "Amit Singh",
    fname: "Suresh Singh",
    mname: "Radha Singh",
    gender: "Male",
    dob: "1997-11-10",
    address: "78, Sector 15, Noida, UP",
    program: "B.Tech",
    branch: "IT",
    year: "2021",
    contactno: "9812345678",
    emailaddress: "amit@example.com",
    password: "password3",
    regdate: "2021-08-01"
  },
  {
    rollno: 100004,
    name: "Neha Verma",
    fname: "Anil Verma",
    mname: "Rekha Verma",
    gender: "Female",
    dob: "2000-03-05",
    address: "House No. 22, Jaipur, Rajasthan",
    program: "B.Tech",
    branch: "CSE",
    year: "2024",
    contactno: "9988776655",
    emailaddress: "neha@example.com",
    password: "password4",
    regdate: "2024-08-01"
  },
  {
    rollno: 100005,
    name: "Ravi Yadav",
    fname: "Mahesh Yadav",
    mname: "Savitri Yadav",
    gender: "Male",
    dob: "1998-01-22",
    address: "55, Aliganj, Lucknow, UP",
    program: "B.Tech",
    branch: "ME",
    year: "2020",
    contactno: "9001122334",
    emailaddress: "ravi@example.com",
    password: "password5",
    regdate: "2020-08-01"
  },
  {
    rollno: 100006,
    name: "Simran Kaur",
    fname: "Harpreet Singh",
    mname: "Jaspreet Kaur",
    gender: "Female",
    dob: "1999-09-12",
    address: "Model Town, Ludhiana, Punjab",
    program: "B.Tech",
    branch: "CSE",
    year: "2022",
    contactno: "9871234560",
    emailaddress: "simran@example.com",
    password: "password6",
    regdate: "2022-08-01"
  },
  {
    rollno: 100007,
    name: "Ankit Gupta",
    fname: "Vijay Gupta",
    mname: "Meena Gupta",
    gender: "Male",
    dob: "1998-06-30",
    address: "Raj Nagar, Ghaziabad, UP",
    program: "B.Tech",
    branch: "EEE",
    year: "2021",
    contactno: "9823456789",
    emailaddress: "ankit@example.com",
    password: "password7",
    regdate: "2021-08-01"
  },
  {
    rollno: 100008,
    name: "Pooja Mishra",
    fname: "Arun Mishra",
    mname: "Seema Mishra",
    gender: "Female",
    dob: "1997-02-18",
    address: "Sector 62, Noida, UP",
    program: "B.Tech",
    branch: "CSE",
    year: "2020",
    contactno: "9811223344",
    emailaddress: "pooja@example.com",
    password: "password8",
    regdate: "2020-08-01"
  },
  {
    rollno: 100009,
    name: "Deepak Kumar",
    fname: "Prakash Kumar",
    mname: "Shanti Devi",
    gender: "Male",
    dob: "1999-12-01",
    address: "Kankarbagh, Patna, Bihar",
    program: "B.Tech",
    branch: "CE",
    year: "2023",
    contactno: "9876543200",
    emailaddress: "deepak@example.com",
    password: "password9",
    regdate: "2023-08-01"
  },
  {
    rollno: 100010,
    name: "Ritika Jain",
    fname: "Ashok Jain",
    mname: "Madhuri Jain",
    gender: "Female",
    dob: "1998-08-25",
    address: "Vaishali, Ghaziabad, UP",
    program: "B.Tech",
    branch: "CSE",
    year: "2021",
    contactno: "9810098100",
    emailaddress: "ritika@example.com",
    password: "password10",
    regdate: "2021-08-01"
  }
]


async function inserData() {
    try{
        await Student.deleteMany({});
        await Student.insertMany(data);
        console.log("Data inseretd successfully");
    }
    catch(errr)  {
        console.log(err);
    }

}

inserData();
