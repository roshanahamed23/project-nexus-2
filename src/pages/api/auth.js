import jwt from "jsonwebtoken";
import mongooseConnect from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  
  await mongooseConnect();

  if (method === "POST") {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({
        auth: false,
        message: "Token not found in the request"
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return res.status(200).json({
        auth: true,
        data: decoded
      });
    } catch (err) {
      return res.status(401).json({
        auth: false,
        message: "Invalid token",
        error: err.message
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
