import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { ApiResponse } from "@/types/ApiResponse";
import { SendVerficationEmail } from "@/helpers/sendverificaitonEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { fullname, email, mobile, password, age } = await request.json();
    console.log(fullname, email, mobile, password);
    // console.log(request);
    // const VerifiedUserExistswithEmail = await UserModel.findOne({
    //   email,
    //   isVerified: true,
    // });
    // if (VerifiedUserExistswithEmail) {
    //   return Response.json({
    //     success: false,
    //     message: "User with the Email already exists",
    //   });
    // }

    // const VerifiedUserExistswithMobile = await UserModel.findOne({
    //   mobile,
    //   isVerified: true,
    // });
    // if (VerifiedUserExistswithMobile) {
    //   return Response.json({
    //     success: false,
    //     message: "User with the Email already exists",
    //   });
    // }

    // const code = generateOTP();
    // const expiryDate = new Date();
    // expiryDate.setHours(expiryDate.getHours() + 1);

    const hashedPassoword = await bcrypt.hash(password, 10);
    console.log(hashedPassoword);

    const newUser = new UserModel({
      fullname,
      email,
      password: hashedPassoword,
      // userId: Number,
      mobile,
      age,
      isVerified: false,
      joined: new Date(),
    });
    console.log("new user created")
    await newUser.save();
    console.log("user saved");
    return Response.json({ success: true, message: "User Registered" });

  } catch (err) {
    console.log("ignUP Route => Error In registering ", err);
    return Response.json("Error");
    // return Response.json(
    //   {
    //     success: false,
    //     message: "Error in registering User",
    //   },
    //   {
    //     status: 500,
    //   }
    // );
  }
}

function generateOTP() {
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }

  return OTP;
}
