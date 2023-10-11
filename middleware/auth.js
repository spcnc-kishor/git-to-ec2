import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;

export const checkToken = (req, res, next) => {
  const authCookies = req.headers.cookie;
  if (!authCookies) {
    return res.status(401).send("Access Denied. No token provided.");
  }
  try {
    const token = authCookies.split("=")[1];
    const tokenData = jwt.verify(token, secret);
    req.user_id = tokenData.userId;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: "Invalid Token." });
  }
};
