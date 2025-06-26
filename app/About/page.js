"use client";
// import React from "react";
// import { useState } from "react";
import React, { useState, useEffect } from "react";

import "./signup.css";
import Link from "next/link";
export default function page() {
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    user();
  }, []);
  const user = () => {
    console.log("gowtham get ready");
    fetch("http://192.168.68.146:8080/api/districts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        console.log("Array length:", data.length);
        const l=data.length;
        if (Array.isArray(data)) {
          setDistricts(data);
        }
        // if (Array.isArray(data) && data.length === 0) {
        //     // setDistricts(data);
        //   console.warn(" The array is empty.");
        // }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setdob] = useState("");
  const [phn_no, setphn_no] = useState("");

  //For validations
  const [emailvalid, setemailvalid] = useState("");
  const [passwordvalid, setpasswordvalid] = useState("");
  const [dateofbirthvalid, setdateofbirthvalid] = useState("");
  const [phonenumbervalid, setphonenumbervalid] = useState("");
  const handleSignUp = async (e) => {
    const gmailR = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    // const passwordR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const passwordR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;


    const birthYear = new Date(dob).getFullYear();
    const now = new Date().getFullYear();
    const age = now - birthYear;
    console.log(age);
    {
      console.log("Birth year:", birthYear);
    }
    e.preventDefault();
    if (!email) {
      setemailvalid("email canot be null");
      return;
    } else if (!gmailR.test(email)) {
      setemailvalid("Please enter a valid Gmail address.");
      return;
    }
    if (!password) {
      setpasswordvalid("password cannot be null");
      return;
    } else if (!passwordR.test(password)) {
      setpasswordvalid(
        "Password must be at least 8 characters and include a capital letter, small letter, number, and special symbol like @ or #."
      );
      return;
    }
    if (!dob) {
      setdateofbirthvalid("Date of birth cannot be null");
      return;
    } else if (age < 18) {
      setdateofbirthvalid("You are not eligible for vote");
      return;
    }
    if (!phn_no) {
      setphonenumbervalid("Enter the division");
      return;
    }

    setpasswordvalid("");
    setemailvalid("");
    setdateofbirthvalid("");
    setphonenumbervalid("");

    console.log("Username entered:", email);
    console.log("Username entered:", password);
    console.log("Username entered:", dob);
    console.log("Username entered:", phn_no);

    try {
      const response = await fetch(
        "http://192.168.68.146:8080/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          
          body: JSON.stringify({
            email: email,
            password: password,
            dob: dob,
            phn_no: phn_no,
          }),
        }
      );
      console.log("ggg");
      const result = await response.text();
      alert(result);
      setemail("");
      setPassword("");
      setdob("");
      setphn_no("");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <div>
      <div className="col">
        {" "}
        <div className="d-flex justify-content-center align-items-center centered-form">
          <form onSubmit={handleSignUp} className="form-box hh">
            <h4>Sign up</h4>
            <div className="mb-3">
              <label
                className="mb-1"
                aria-placeholder="Enter the enail"
                htmlFor="email"
              >
                Enter your Email  <span style={{ color: 'red' }}>*</span>
              </label>
              {emailvalid && (
                <div className="form-text text-danger">{emailvalid} </div>
              )}
              <input
                id="email"
                //  type="email"
                className="form-control  border-warning rounded-3 shaborderdow-sm form-control-sm"
                value={email}
                placeholder="name@gmail.com"
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="password">
                Create your Voteid  <span style={{ color: 'red' }}>*</span>
              </label>
              {passwordvalid && (
                <div className="form-text text-danger">{passwordvalid} </div>
              )}
              <input
                id="password"
                //   type="password"
                className="form-control border-warning rounded-3 shaborderdow-sm form-control-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label className="mb-2" htmlFor="dob">
                Date of Birth  <span style={{ color: 'red' }}>*</span>
              </label>
              {dateofbirthvalid && (
                <div className="form-text text-danger">{dateofbirthvalid}</div>
              )}
              <input
                type="date"
                className="form-control form-control-sm border-warning rounded-3 shaborderdow-sm"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="phonenumber">
                Enter The District <span style={{ color: 'red' }}>*</span>
              </label>
              {phonenumbervalid && (
                <div className="form-text text-danger">{phonenumbervalid}</div>
              )}
              {/* <input
                id="phonenumber"
               // type="tel"
                className="form-control border-warning rounded-3 shaborderdow-sm form-control-sm"
                value={phn_no}
                onChange={(e) => setphn_no(e.target.value)}
              ></input> */}

              <select
                className="form-select  division"
               size="3"
                aria-label="size 3 select example"
                value={phn_no}
                onChange={(e) => setphn_no(e.target.value)}
                // style={{ overflowY: "scroll" }} // adds scroll bar
              >
                <option value="">Select your Division</option>
                {districts.map((item, index) => (
                  <option key={index} value={item.districts}>
                    {item.districts}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn bg-warning text-primary chang p-2  btn-sm w-100"
              >
                Signup
              </button>
              <Link href="./user" className="mb-3 text-warning ">
                click back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
