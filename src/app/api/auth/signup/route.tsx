import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(req: Request) {
    await dbConnect();

    try{
        console.log(req);
    }
    catch (err) {   
        console.log("Error In registering", err);
        Response.json("hii")
    }       
}
