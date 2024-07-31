import bcrypt from "bcrypt";
import validator from "validator";
import userModel from '@/models/user';

import mongooseConnect from "@/lib/mongoose";

const validateSignup = async (req) => {
  const { name, email, password } = req.body;
  const errors = {};

  if (!name || name.trim().length === 0) {
    errors.name = "Enter a name field";
  }

  if (!email || !validator.isEmail(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!password || password.trim().length === 0) {
    errors.password = "Enter a password field";
  } else if (password.trim().length <= 5) {
    errors.password = "The minimum length of the password is 6";
  }

  const existingUser = await userModel.findOne({ email }).exec();
  if (existingUser) {
    errors.email = "The account already exists";
  }

  return errors;
};

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    try {
      const errors = await validateSignup(req);
      if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
      }

      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userModel.create({ name, email, password: hashedPassword });

      res.status(201).json({
        message: "The account was created successfully",
        id: user._id,
      });
    } catch (err) {
      res.status(500).json({ message: "An unexpected error occurred", error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
