import mongoose, { Schema, Document } from "mongoose";
import { ST } from "next/dist/shared/lib/utils";

export interface User extends Document {
  username: string;
  phone : number;
  email: string;
  password: string;
  userId: Number;
  age :Number;
  isVerified: boolean;
  joined: Date;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  phone : {
    type: Number,
    required: [true, "Mobile Numbmer is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  age : {
    type : Number,
    required :true
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  joined: {
    type: Date,
    required: true,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;