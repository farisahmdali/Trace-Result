import express from "express";
import { getStudentByRegisterNumber, renderHomePage } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", renderHomePage);
router.post("/", getStudentByRegisterNumber);

export default router;
