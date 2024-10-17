"use client";
import React, { FormEvent, useEffect, useState } from "react";
import "@/styles/signup.css";

const Signup = () => {
  const [verify, setVerify] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState(firstname + " " + lastname);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");
  const [matchPass, setMatchPass] = useState("text-gray-500");
  const [confirmPass, setConfirmPass] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullname,
        email: email,
        mobile: mobile,
        dob: dob,
        pass: pass,
      }),
    });
    console.log(res);
  }

  useEffect(() => {
    // console.log(fullname, email, mobile, dob, pass, confirmPass);
    setFullname(firstname + " " + lastname);
  }, [firstname, lastname, email, mobile, dob, pass, confirmPass]);

  return (
    <div className="loginForm min-h-[90vh] flex flex-col items-center border">
      <div className=" text-center p-16">
        {/* <h1 className="text-2xl">SignUp</h1> */}
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
              // pattern="[6-9]{3}[0-9]{7}"
            />
            <span>Mobile No.</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="password"
              className="inputSignup"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <span>Password</span>
          </label>
          <label id="loginFormConfirmPass">
            <input
              required
              placeholder=""
              type="password"
              className="confirmPassSignup"
              onChange={(e) => {
                setConfirmPass(e.target.value);
                console.log(confirmPass)
                if (pass === confirmPass) {
                  console.log(pass, confirmPass);
                  setMatchPass("text-green-500");
                } else if (pass === "") {
                  console.log(pass, confirmPass);
                  setMatchPass("text-gray-500");
                } else {
                  console.log(pass, confirmPass);
                  setMatchPass("text-red-500");
                }
              }}
              aria-required
            />
            <span className={matchPass}>Confirm password</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="/">Signin</a>{" "}
          </p>
        </form>
        {/* 
        <form
          // action="/api/signup"
          // method="post"
          className=" signupform flex flex-col justify-center items-start p-5 gap-2"
        >
          <>
            <label htmlFor="loginFormName">Full Name:</label>
            <input type="text" required />
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
        </form> */}
      </div>
    </div>
  );
};

export default Signup;
