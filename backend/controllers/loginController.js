import bcrypt from "bcryptjs";
import Login from "../models/Login.js";

// ✅ Login for Student/Admin
export const loginUser = async (req, res) => {

  try {
    const { userid, password } = req.body;

    // 🔹 Check if user exists
    const user = await Login.findOne({ userid });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔹 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔹 Return success + role
    res.json({
      message: "Login successful",
      usertype: user.usertype,
      userid: user.userid
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
