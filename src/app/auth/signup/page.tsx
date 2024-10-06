"use client";
import React, { useEffect, useState } from "react";

const Signup = () => {
  const [verify, setVerify] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // console.log(e);
    // if (fullname)
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, mobile, dob, confirmPass, pass }),
    });
  }

  useEffect(() => {
    console.log(fullname, email, mobile, dob, pass, confirmPass);
  }, [fullname, email, mobile, dob, pass, confirmPass]);

  return (
    <div className="loginForm min-h-[90vh] flex flex-col items-center border">
      <div className=" text-center p-16">
        <h1 className="text-2xl">SignUp</h1>
        <form
          // action="/api/signup"
          // method="post"
          className=" signupform flex flex-col justify-center items-start p-5 gap-2"
        >
          <>
            <label htmlFor="loginFormName">Full Name:</label>
            <input
              type="text"
              name="fullname"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              id="loginFormName"
              required
            />
          </>
          <>
            <label htmlFor="loginFormEmail">Email:</label>
            <input
              type="email"
              name="email"
              id="loginFormEmail"
              className="bg-gray-100 border"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </>
          <>
            <label htmlFor="loginFormMobile">Ph No.:</label>
            <input
              type="tel"
              name=""
              id="loginFormMobile"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              required
            />
          </>
          <>
            <label htmlFor="loginFormDOB">DOB:</label>
            <input
              type="date"
              name=""
              id="loginFormDOB"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              required
            />
          </>
          <>
            <label htmlFor="loginFormPass">Password:</label>
            <input
              type="text"
              name="passowrd"
              id="loginFormPass"
              className="bg-gray-100 border"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
            />
          </>
          <>
            <label htmlFor="loginFormConfirmPass">Confirm Password:</label>
            <input
              type="text"
              name=""
              id="loginFormConfirmPass"
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
              required
            />
          </>

          <button
            type="submit"
            className="bg-cyan-300 rounded-2xl py-3 px-8 mt-9 hover:text-white m-auto cursor-pointer hover:bg-slate-800"
            onClick={(e) => handleSubmit(e)}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
