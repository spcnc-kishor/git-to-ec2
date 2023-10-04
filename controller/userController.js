import Utility from "../common/utility.js";
import db from "../model/index.js";
import bcrypt from "bcrypt";
import userValidatorSchema from "../validators/userValSchema.js";
import jwt from "jsonwebtoken";

const userModel = db.users;
const secret = process.env.JWT_SECRET_KEY;

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    Utility.validateSchmea(userValidatorSchema.signInUser, req.body);
    const userIsExist = await userModel.findOne({ where: { email } });
    if (!userIsExist) {
      return res.status(404).json({
        status: false,
        message: "User doesn't exist",
      });
    }
    const checkPswd = await bcrypt.compare(password, userIsExist.password);
    if (!checkPswd) {
      return res.status(404).json({
        status: false,
        message: "User doesn't exist with this username or password",
      });
    }
    const token = jwt.sign({ userId: userIsExist.id }, secret);
    res.cookie("access-token", token, {
      secure: true,
      httpOnly: true,
    });
    return res.json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const signup = async (req, res) => {
  const { fname, lname, username, email, contact, password } = req.body;
  try {
    Utility.validateSchmea(userValidatorSchema.signUpUser, req.body);
    const isExist = await userModel.findOne({
      where: { email },
    });
    if (isExist) {
      return res.status(403).json({
        status: false,
        message: "User already exist with this account",
      });
    }
    const hashPswd = await bcrypt.hash(password, 10);
    const createUser = await userModel.create({
      ...req.body,
      password: hashPswd,
    });
    if (createUser) {
      return res.status(201).json({
        status: true,
        message: "Creation success",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};
