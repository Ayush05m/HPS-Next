"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "@/styles/signup.css";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Signup = () => {
  const [verify, setVerify] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  // const [dob, setDob] = useState<Date>();
  const [pass, setPass] = useState("");
  const [matchPass, setMatchPass] = useState("text-gray-500");
  const [confirmPass, setConfirmPass] = useState("");
  const [age, setAge] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const formDataObject = {
      fullname: firstname + " " + lastname,
      email,
      mobile,
      // dob,
      password: pass,
      age,
    };
    console.log(formDataObject);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });
    console.log(res);
  }

  useEffect(() => {
    if (confirmPass === "") {
      setMatchPass("text-gray-500"); // No input
    } else if (confirmPass === pass) {
      setMatchPass("text-[#008000]"); // Passwords match
    } else {
      setMatchPass("text-red-500"); // Passwords do not match
    }
    console.log(matchPass);
  }, [pass, confirmPass]);

  return (
    <div className="loginForm signupForm min-h-[90vh] flex flex-col items-center border">
      <div className=" text-center p-16">
        <form className="form flex flex-col " onSubmit={(e) => handleSubmit(e)}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="name flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="inputSignup"
                name="firstname"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                id="loginFormName"
              />
              <span>First Name</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="inputSignup"
                name="lastname"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
              <span>Last Name</span>
            </label>
          </div>

          <label>
            <input
              required
              placeholder=""
              type="email"
              value={email}
              id="loginFormEmail"
              className="inputSignup bg-gray-100 border"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              aria-required
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type=" "
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              className="inputSignup"
              pattern="[0]{1}[6-9]{3}[0-9]{7}"
            />
            <span>Mobile No.</span>
          </label>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start flex gap-10 font-normal py-7",
                  !dob && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {dob ? format(dob, "PPP") : <span>DOB</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={setDob}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}

          <label>
            <input
              required
              placeholder=""
              type="number"
              className="inputSignup"
              onChange={(e) => setAge(e.target.value)}
            />
            <span>Age</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              className="inputSignup"
              onChange={(e) => setPass(e.target.value)}
            />
            <span>Password</span>
          </label>
          <label id="loginFormConfirmPass">
            <input
              required
              placeholder=""
              type="password"
              className=" confirmPassSignup"
              onChange={(e) => {
                setConfirmPass(e.target.value);
                e.preventDefault();
                // handleConfirmPassCheck(e);
              }}
              aria-required="true"
            />
            <span className={matchPass}>Confirm password</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="/">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
