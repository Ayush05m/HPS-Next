import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  // console.log(process.env);

  await dbConnect();

  try {
    const { email, password } = await req.json();
    console.log(email, password);
    const user = await UserModel.findOne({
      email,
    });
    console.log(user);
    if (!user) {
      return Response.json({ success: false, message: "User doesn't exist" });
    }
    const userVerification = await bcrypt.compare(password, user.password);
    console.log(userVerification);
    

    return Response.json({ success: 200 });
  } catch (err) {
    console.log("Error In registering", err);
    return Response.json("hii");
  }
}
