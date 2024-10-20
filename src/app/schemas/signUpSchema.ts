import { z } from "zod";

export const nameValidation = z
  .string()
  .min(3, "Name must be atleast 3 Characters")
  .max(50, "Name must be less than 50 Characters")
  .regex(/^[a-zA-z]+$/, "Name must be composed of Alphabets only");

export const usernameValidation = z
  .string()
  .min(3, "Name must be atleast 3 Characters")
  .max(15, "Name must be less than 50 Characters")
  .regex(/^[a-zA-z0-9_]+$/, "Name must be composed of Alphabets only");

export const signUpSchema = z.object({
    username : usernameValidation,
    fullname : nameValidation,
    email : z.string().email(),
    phone : z.string().length(10, "invlaid Mobile Number"),
    password : z.string().min(6, {message: "password must be atleast 6 char"}),
})
