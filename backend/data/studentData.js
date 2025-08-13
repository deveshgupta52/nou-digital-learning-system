import mongoose, { mongo } from 'mongoose';
import Student from '../models/Student.js';

mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));


const data = [
  {
    "rollno": 100123,
    "name": "Aman Verma",
    "fname": "Rajesh Verma",
    "mname": "Sunita Verma",
    "gender": "Male",
    "address": "123 MG Road, Lucknow, Uttar Pradesh",
    "program": "B.Tech",
    "branch": "CSE",
    "year": "2023",
    "contactno": "9876543210",
    "emailaddress": "aman.verma@example.com",
    "password": "pass1234",
    "regdate": "2023-06-15T10:00:00Z"
  },
  {
    "rollno": 100124,
    "name": "Priya Sharma",
    "fname": "Anil Sharma",
    "mname": "Kavita Sharma",
    "gender": "Female",
    "address": "45 Civil Lines, Delhi",
    "program": "B.Sc",
    "branch": "Physics",
    "year": "2022",
    "contactno": "9123456789",
    "emailaddress": "priya.sharma@example.com",
    "password": "securepass",
    "regdate": "2022-07-12T09:30:00Z"
  },
  {
    "rollno": 100125,
    "name": "Ravi Kumar",
    "fname": "Suresh Kumar",
    "mname": "Lata Kumar",
    "gender": "Male",
    "address": "56 Ashok Nagar, Patna, Bihar",
    "program": "BCA",
    "branch": "Computer Applications",
    "year": "2024",
    "contactno": "9988776655",
    "emailaddress": "ravi.kumar@example.com",
    "password": "mypassword",
    "regdate": "2024-08-01T08:15:00Z"
  },
  {
    "rollno": 100126,
    "name": "Sneha Gupta",
    "fname": "Vijay Gupta",
    "mname": "Poonam Gupta",
    "gender": "Female",
    "address": "89 Park Street, Kolkata, West Bengal",
    "program": "B.Com",
    "branch": "Accounts",
    "year": "2021",
    "contactno": "9765432109",
    "emailaddress": "sneha.gupta@example.com",
    "password": "snehapass",
    "regdate": "2021-05-20T11:45:00Z"
  },
  {
    "rollno": 100127,
    "name": "Arjun Singh",
    "fname": "Mahesh Singh",
    "mname": "Sarita Singh",
    "gender": "Male",
    "address": "101 Nehru Nagar, Jaipur, Rajasthan",
    "program": "B.Tech",
    "branch": "Mechanical",
    "year": "2023",
    "contactno": "9654321780",
    "emailaddress": "arjun.singh@example.com",
    "password": "arjun2023",
    "regdate": "2023-09-10T14:20:00Z"
  },
  {
    "rollno": 100128,
    "name": "Neha Rani",
    "fname": "Manoj Rani",
    "mname": "Anita Rani",
    "gender": "Female",
    "address": "14 Gandhi Path, Bhopal, MP",
    "program": "BA",
    "branch": "English",
    "year": "2022",
    "contactno": "9871203456",
    "emailaddress": "neha.rani@example.com",
    "password": "nehapass22",
    "regdate": "2022-02-14T07:55:00Z"
  },
  {
    "rollno": 100129,
    "name": "Kunal Mehta",
    "fname": "Harish Mehta",
    "mname": "Sonia Mehta",
    "gender": "Male",
    "address": "88 Sector 21, Chandigarh",
    "program": "B.Sc",
    "branch": "Chemistry",
    "year": "2021",
    "contactno": "9823456710",
    "emailaddress": "kunal.mehta@example.com",
    "password": "kunalpass",
    "regdate": "2021-04-18T16:40:00Z"
  },
  {
    "rollno": 100130,
    "name": "Isha Kapoor",
    "fname": "Vinod Kapoor",
    "mname": "Suman Kapoor",
    "gender": "Female",
    "address": "23 Tilak Road, Pune, Maharashtra",
    "program": "BCA",
    "branch": "Computer Applications",
    "year": "2024",
    "contactno": "9932114567",
    "emailaddress": "isha.kapoor@example.com",
    "password": "ishapass",
    "regdate": "2024-03-08T19:25:00Z"
  },
  {
    "rollno": 100131,
    "name": "Manish Yadav",
    "fname": "Om Prakash Yadav",
    "mname": "Kamla Yadav",
    "gender": "Male",
    "address": "56 Rajendra Nagar, Varanasi, UP",
    "program": "B.Tech",
    "branch": "Electrical",
    "year": "2023",
    "contactno": "9812345678",
    "emailaddress": "manish.yadav@example.com",
    "password": "manish2023",
    "regdate": "2023-10-01T12:00:00Z"
  },
  {
    "rollno": 100132,
    "name": "Pooja Mishra",
    "fname": "Raghav Mishra",
    "mname": "Sunanda Mishra",
    "gender": "Female",
    "address": "67 Patel Nagar, Kanpur, UP",
    "program": "B.Ed",
    "branch": "Education",
    "year": "2022",
    "contactno": "9798123456",
    "emailaddress": "pooja.mishra@example.com",
    "password": "poojapass",
    "regdate": "2022-08-22T17:10:00Z"
  },
  {
    "rollno": 100133,
    "name": "Rohit Malhotra",
    "fname": "Prakash Malhotra",
    "mname": "Shobha Malhotra",
    "gender": "Male",
    "address": "78 Connaught Place, Delhi",
    "program": "B.Com",
    "branch": "Finance",
    "year": "2021",
    "contactno": "9956781234",
    "emailaddress": "rohit.malhotra@example.com",
    "password": "rohitpass",
    "regdate": "2021-01-19T06:50:00Z"
  },
  {
    "rollno": 100134,
    "name": "Ananya Das",
    "fname": "Subhash Das",
    "mname": "Mina Das",
    "gender": "Female",
    "address": "12 Howrah Bridge Road, Kolkata",
    "program": "B.Sc",
    "branch": "Mathematics",
    "year": "2024",
    "contactno": "9811765432",
    "emailaddress": "ananya.das@example.com",
    "password": "ananyapass",
    "regdate": "2024-09-15T15:05:00Z"
  }
];

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
