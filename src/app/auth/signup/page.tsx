import React from "react";

const Signup = () => {
  return (
    <div className="loginForm min-h-[90vh] flex flex-col items-center border">
      <div className=" text-center p-16">
        <h1 className="text-2xl">SignUp</h1>
        <form
          action="/"
          className="flex flex-col justify-center items-start p-5 gap-2"
        >
          <>
            <label htmlFor="loginFormName">Full Name:</label>
            <input type="text" name="fullname" id="loginFormName" required/>
          </>
          <>
            <label htmlFor="loginFormEmail">Email:</label>
            <input
              type="email"
              name="email"
              id="loginFormEmail"
              className="bg-gray-100 border"
              required
            />
          </>
          <>
            <label htmlFor="loginFormMobile">Ph No.:</label>
            <input type="tel" name="" id="loginFormMobile" required/>
          </>
          <>
            <label htmlFor="loginFormDOB">DOB:</label>
            <input type="date" name="" id="loginFormDOB" required/>
          </>
          <>
            <label htmlFor="loginFormPass">Password:</label>
            <input
              type="text"
              name="passowrd"
              id="loginFormPass"
              className="bg-gray-100 border"
              required
            />
          </>
          <>
            <label htmlFor="loginFormConfirmPass">Confirm Password:</label>
            <input type="text" name="" id="loginFormConfirmPass" required/>
          </>

          <button typeof="submit" className="bg-cyan-300 rounded-2xl py-3 px-8 mt-9 hover:text-white m-auto cursor-pointer hover:bg-slate-800">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
