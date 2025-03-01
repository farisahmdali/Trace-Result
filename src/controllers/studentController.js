import Student from "../models/student.js";

export const renderHomePage = (req, res) => {
  res.render("home", { error: null });
};

export const getStudentByRegisterNumber = async (req, res) => {
  try {
    let { registerNumber } = req.body;

    // Server-side validation
    if (!registerNumber) {
      return res.render("home", {
        error: "Register number is required",
      });
    }

    // Trim and sanitize
    registerNumber = registerNumber.trim();

    // Validate number format
    if (!/^\d+$/.test(registerNumber)) {
      return res.render("home", {
        error: "Register number must contain only numbers",
      });
    }

    // Validate length
    // if (registerNumber.length < 5) {
    //   return res.render("home", {
    //     error: "Register number must be at least 5 digits",
    //   });
    // }

    const student = await Student.findOne({ registerNumber });

    if (!student) {
      return res.render("home", {
        error: "No student found with this registration number",
      });
    }

    res.render("student", { student, error: null });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.render("home", {
      error: "An error occurred while fetching the results",
    });
  }
};
