import mongoose from 'mongoose';
import newsModel from '../models/News.js';

// dummyNews.js

export const newsData = [
  {
    title: "University Launches New Digital Learning Platform",
    content: "The university has launched a new e-learning platform to improve accessibility for students.",
    author: "Admin",
    summary: "New e-learning platform for all students.",
    date: new Date("2025-08-01")
  },
  {
    title: "Annual Sports Meet 2025 Announced",
    content: "The university will host its annual sports meet from September 10 to 15, featuring various games and competitions.",
    author: "Sports Department",
    summary: "Annual sports meet scheduled for September.",
    date: new Date("2025-08-05")
  },
  {
    title: "Library Extends Opening Hours",
    content: "The central library will now remain open till 10 PM on weekdays to provide extended study time for students.",
    author: "Library Staff",
    summary: "Library hours extended till 10 PM.",
    date: new Date("2025-07-25")
  },
  {
    title: "Workshop on Artificial Intelligence",
    content: "A workshop on AI and Machine Learning will be conducted by industry experts on August 20, 2025.",
    author: "Tech Department",
    summary: "AI workshop on August 20 by experts.",
    date: new Date("2025-08-02")
  },
  {
    title: "Cultural Fest 2025 Registrations Open",
    content: "Students can now register for the cultural fest scheduled for October 2025. Multiple events and performances will be held.",
    author: "Cultural Committee",
    summary: "Cultural fest registrations open.",
    date: new Date("2025-07-30")
  },
  {
    title: "Blood Donation Camp Organized",
    content: "A blood donation camp will be organized in collaboration with the Red Cross Society on August 15, 2025.",
    author: "Health Club",
    summary: "Blood donation camp on Independence Day.",
    date: new Date("2025-08-08")
  },
  {
    title: "Placement Drive for Final Year Students",
    content: "The placement cell has announced a mega placement drive for final-year students starting from September 1, 2025.",
    author: "Placement Cell",
    summary: "Placement drive from September 1.",
    date: new Date("2025-07-28")
  },
  {
    title: "Campus Wi-Fi Upgrade Completed",
    content: "The IT department has successfully upgraded the campus Wi-Fi infrastructure to provide faster and more stable connectivity.",
    author: "IT Department",
    summary: "Faster campus Wi-Fi available.",
    date: new Date("2025-08-06")
  },
  {
    title: "Scholarship Applications Open",
    content: "Applications for merit-based scholarships are now open. Eligible students can apply till August 31, 2025.",
    author: "Scholarship Committee",
    summary: "Apply for merit-based scholarships.",
    date: new Date("2025-07-22")
  },
  {
    title: "Green Campus Initiative Launched",
    content: "The university has launched an initiative to promote eco-friendly practices, including waste segregation and tree plantation.",
    author: "Environmental Club",
    summary: "Eco-friendly initiative in campus.",
    date: new Date("2025-08-03")
  },
  {
    title: "New Cafeteria Menu Introduced",
    content: "The campus cafeteria has introduced a new menu with healthier food options for students and staff.",
    author: "Cafeteria Management",
    summary: "Healthier food options in cafeteria.",
    date: new Date("2025-07-20")
  },
  {
    title: "Online Examination Portal Maintenance",
    content: "The online exam portal will undergo maintenance on August 12, 2025, from 2 AM to 6 AM.",
    author: "Examination Cell",
    summary: "Exam portal maintenance on August 12.",
    date: new Date("2025-08-09")
  },
  {
    title: "Photography Contest 2025",
    content: "The photography club has announced a contest with exciting prizes. Submissions are open till September 5, 2025.",
    author: "Photography Club",
    summary: "Submit your entries for photography contest.",
    date: new Date("2025-08-04")
  },
  {
    title: "Alumni Meet Scheduled",
    content: "An alumni meet will be held on November 15, 2025, to reconnect graduates with the university community.",
    author: "Alumni Association",
    summary: "Alumni meet on November 15.",
    date: new Date("2025-08-07")
  },
  {
    title: "Coding Hackathon Announced",
    content: "The computer science department has announced a 24-hour coding hackathon on September 25, 2025.",
    author: "CSE Department",
    summary: "Hackathon on September 25.",
    date: new Date("2025-08-10")
  }
];



mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));



async function insertData() {
    try{
        await newsModel.deleteMany({});
        // await newsModel.insertMany(newsData);
        console.log("data inserted");
    }
    catch(err) {
        console.log(err);
    }
}

insertData();