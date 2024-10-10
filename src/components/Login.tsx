import React from "react";
import "@/styles/login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form flex flex-col">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="bg-cyan-300 rounded-2xl py-3 px-8 mt-4 hover:text-white m-auto cursor-pointer hover:bg-slate-800"
              // onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
            {/* <button className="sign">Sign in</button> */}
          </form>
          <p className="signup mt-4">
            Don't have an account?
            <a rel="noopener noreferrer" href="/auth/signup" className="">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
