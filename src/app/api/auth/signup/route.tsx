import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(request: Request) {
  // await dbConnect();

  try {
    const req = await request.json();
    // console.log(name, email, mobile, pass, dob);
    console.log(req)
    return Response.json({ success: true });
  } catch (err) {
    console.log("Error In registering", err);
    return Response.json("error");
  }
}
