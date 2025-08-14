import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function sendWelcomeEmail(student) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: `"College Admin" <${process.env.EMAIL_USER}>`,
      to: student.emailaddress,
      subject: 'Welcome to Our College 🎉',
      html: `
        <h2>Welcome, ${student.name}!</h2>
        <p>We are excited to have you in the <strong>${student.program} - ${student.branch}</strong> program.</p>
        <p>Your Roll No: <strong>${student.rollno}</strong></p>
        <p>Registration Date: ${student.regdate.toDateString()}</p>
        <br>
        <p>Best wishes,</p>
        <p>College Administration</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Welcome email sent to ${student.emailaddress}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${student.emailaddress}:`, error);
  }
}
