"use client";
import React, { useState } from "react";
import "./user.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorm, seterrorm] = useState("");
  const [errorpass, seterrorpass] = useState("");
  const user = useRouter();

  const handlelogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      seterrorm("Email can not be null");
      return;
    }
    if (!password) {
      seterrorpass("Password cannot be null");
      return;
    }

    // Check hardcoded credentials
   
    try {
      const response = await fetch("http://192.168.68.125:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

        const result = await response.text();
         const isSuccess = result === "true";
       if (isSuccess) {
      user.push("/card");
      seterrorm("");
    } else {
      seterrorm("Enter a valid email");
      seterrorpass("Enter a valid password");
    }

     // alert(result);
      setemail("");
      setpassword("");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signup = (e) => {
    e.preventDefault();
    user.push("/About");
  };

  return (
    <div className="color">
      <div className="d-flex justify-content-center align-items-center centered-form">
        <form onSubmit={handlelogin} className="form-box">
          <h1>Login</h1>

          <div className="mb-3">
            <label className="mb-1" htmlFor="email">
              Enter the email
            </label>
            {errorm && <p className="error">{errorm}</p>}
            <input
              value={email}
              id="email"
              type="text"
              onChange={(e) => setemail(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1" htmlFor="password">
              Enter the Password
            </label>
            {errorpass && <p className="error">{errorpass}</p>}
            <input
              value={password}
              id="password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn bg-warning text-dark btn-sm w-100"
            >
              Submit
            </button>
          </div>

          <div className="mb-3">
            <button
              type="button"
              onClick={signup}
              className="btn btn bg-warning text-dark btn-sm w-100"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
