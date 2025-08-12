// seedNews.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import News from "../models/News.js";

dotenv.config();

const items = [
  {
    title: "New AI Lab Opens at Nou University",
    content: "Nou University launched a new AI research lab focused on education-tech.",
    image: "https://via.placeholder.com/800x450",
    author: "Nou University",
    date: new Date("2025-08-01")
  },
  {
    title: "Semester Exams Schedule Released",
    content: "The controller of examinations released the semester timetable.",
    image: "https://via.placeholder.com/800x450",
    author: "Exam Dept",
    date: new Date("2025-07-25")
  },
  {
    title: "Student Tech Fest Announced",
    content: "A 3-day student tech festival will be held in September with prizes and workshops.",
    image: "https://via.placeholder.com/800x450",
    author: "Student Council",
    date: new Date("2025-08-05")
  }
];

const seed = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI missing");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB. Seeding news...");
    await News.deleteMany({});
    const created = await News.insertMany(items);
    console.log("Seeded:", created.length);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();