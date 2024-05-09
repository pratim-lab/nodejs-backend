import { zodSignupUserSchema } from "../utils/zod_validation.js";
import { ApiError } from "../utils/ApiError.js";
export const userSignup = (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const validateUserSignupdata = zodSignupUserSchema.safeParse(req.body);
    //console.log(validateUserSignupdata);
    res.status(200).json(validateUserSignupdata);
  } catch (error) {
    console.log(error);
    //throw new ApiError(400, error.errors.issues[0].message);
    res.status(400).json(error.errors);
  }
};

export const userSignin = (req, res, next) => {
  const { username, email, password } = req.body;
  res.status(200).json({
    message: "Sign in",
  });
};
