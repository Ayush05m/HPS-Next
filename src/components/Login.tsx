import React, { FormEvent } from "react";
import "@/styles/login.css";

const Login = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);

    const formDataObject = {
      email: form.email.value,
      password: form.password.value,
    };
    console.log(formDataObject);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });
      const data = await response.json();
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="login">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form flex flex-col" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                // name="password"
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
