import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "@/models/user"; // Make sure the import path is correct
import mongooseConnect from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  console.log(userModel); // Debugging step to check if userModel is loaded

  if (method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const dbuser = await userModel.findOne({ email }).exec();
      if (dbuser) {
        const match = await bcrypt.compare(password, dbuser.password);
        if (match) {
          const token = jwt.sign(
            { name: dbuser.name, email: dbuser.email },
            process.env.SECRET_KEY,
            { expiresIn: '1h' } 
          );

          return res.status(200).json({
            message: "Login successfully",
            token
          });
        } else {
          return res.status(401).json({ message: "Username or password is incorrect" });
        }
      } else {
        return res.status(404).json({ message: "Email not registered" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
