import zod from "zod";

export const zodSignupUserSchema = zod.object({
  username: zod.string().min(5, "Username should be atleast 5 characters long"),
  email: zod.string().email(),
  password: zod.string(),
});
