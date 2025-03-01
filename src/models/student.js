import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  institution: { type: String, required: true },
  medium: {
    type: String,
    required: true,
    enum: ["ENGLISH", "MALAYALAM"],
  },
  mark: { type: Number, required: true, min: 0, max: 100 },
  rank: { type: Number || String, required: true, min: 1 },
  scholarship: {
    type: String,
    required: true,
    enum: ["100", "50", "25", "Not Eligible"],
  },
});

export default mongoose.model("Student", studentSchema);
