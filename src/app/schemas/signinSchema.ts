import { z } from "zod";
import { usernameValidation } from "./signUpSchema";

export const signinValidation = z.object({
    username : usernameValidation,
    password : z.string().min(8, { message: "Password must be at least"})
})