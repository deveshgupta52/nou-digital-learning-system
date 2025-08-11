import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import student_route from "./routes/studentRoutes.js";
import adminRoute from "./routes/Adminroutes.js";
import courseRoute from "./routes/courseRoute.js";
import resultRoute from "./routes/resultRoute.js";
import enquiryRoute from "./routes/enquiryRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

app.use("/courses", courseRoute);
app.use("/enquiry", enquiryRoute);
app.use("/result", resultRoute);

app.use("/api/students", authRoute);
app.use("/api/students", student_route);
app.use("/api/admin", adminRoute);

connectDB();

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
