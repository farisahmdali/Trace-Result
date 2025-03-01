import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "../models/student.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

// Function to determine scholarship based on rank
const getScholarship = (rank) => {
  if (rank === 1) return "100";
  if (rank === 2) return "50";
  if (rank === 3) return "25";
  return "Not Eligible";
};

const seedStudents = async () => {
  try {
    await Student.deleteMany();

    const students = [
      {
        registerNumber: "123456",
        name: "John Doe",
        institution: "ABC College",
        medium: "ENGLISH",
        mark: 85,
        rank: 2,
        scholarship: getScholarship(2),
      },
      {
        registerNumber: "654321",
        name: "Jane Smith",
        institution: "XYZ High School",
        medium: "MALAYALAM",
        mark: 78,
        rank: 3,
        scholarship: getScholarship(3),
      },
      {
        registerNumber: "789012",
        name: "Alice Johnson",
        institution: "LMN Academy",
        medium: "ENGLISH",
        mark: 92,
        rank: 1,
        scholarship: getScholarship(1),
      },
      {
        registerNumber: "567890",
        name: "Bob Williams",
        institution: "PQR Institute",
        medium: "MALAYALAM",
        mark: 60,
        rank: 4,
        scholarship: getScholarship(4),
      },
    ];

    await Student.insertMany(students);
    console.log("✅ Dummy students added successfully!");
  } catch (error) {
    console.error("❌ Error seeding students:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedStudents();
