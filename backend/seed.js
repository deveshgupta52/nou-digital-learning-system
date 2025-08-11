// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import News from "./models/News.js"; // Adjust path if needed

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const newsData = [
  {
    title: "NOU Launches New Digital Learning Portal",
    content: "Nalanda Open University has launched a new portal for digital learning.",
    date: new Date(),
  },
  {
    title: "Examination Schedule Released",
    content: "The university has announced the examination schedule for all courses.",
    date: new Date(),
  },
  {
    title: "Online Admission Open",
    content: "Admissions for the new academic session are now open on the portal.",
    date: new Date(),
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB for seeding");

    // Clear old data
    await News.deleteMany();
    console.log("🗑 Old news removed");

    // Insert new data
    await News.insertMany(newsData);
    console.log("✅ Sample news data inserted");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    mongoose.connection.close();
  }
};

seedDatabase();