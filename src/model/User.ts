import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  fullname: string;
  mobile: number;
  email: string;
  password: string;
  age: Number;
  isVerified: boolean;
  joined: Date;
}

const UserSchema = new Schema({
  // username: {
  //   type: String,
  //   required: [true, "Username is required"],
  //   trim: true,
  //   unique: true,
  // },
  fullname: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    unique: true,
  },
  mobile: {
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
  // userId: {
  //   type: Number,
  //   required: true,
  // },
  age: {
    type: Number,
    required: true,
  },
  // isVerified: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  joined: {
    type: Date,
    required: true,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
