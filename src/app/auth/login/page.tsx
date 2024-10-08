import React from "react";

const Login = () => {
  return (
    <div className="loginForm min-h-[90vh] flex flex-col items-center border">
      <div className=" text-center p-16">
        <h1 className="text-2xl">Login</h1>
        <form action="/" className="flex flex-col justify-center items-start p-5 gap-2">
          {/* <>
          <label htmlFor="loginFormName">Full Name:</label>
          <input type="text" name="fullname" id="loginFormName" />
        </> */}
          <>
            <label htmlFor="loginFormName">Email:</label>
            <input
              type="email"
              name="email"
              id="loginFormEmail"
              className="bg-gray-100 border"
            />
          </>
          <>
            <label htmlFor="loginFormName">Password:</label>
            <input
              type="text"
              name="passowrd"
              id="loginFormpassword"
              className="bg-gray-100 border"
            />
          </>
          {/* <>
          <label htmlFor="loginFormName">Full Name:</label>
          <input type="text" name="" id="loginFormName" />
        </>
        <>
          <label htmlFor="loginFormName">Full Name:</label>
          <input type="text" name="" id="loginFormName" />
        </> */}

          <button className="bg-gray-300 rounded-2xl py-3 px-8 mt-9 hover:text-white m-auto hover:bg-slate-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
