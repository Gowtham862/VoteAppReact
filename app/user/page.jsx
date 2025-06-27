"use client";

import React, { useEffect, useState } from "react";

import "./user.css";
import { useRouter } from "next/navigation";

import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const city = searchParams.get("city");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorm, seterrorm] = useState("");
  const [errorpass, seterrorpass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sentemail, setsentemail] = useState("");
  const [sentdistrict, setsentdistrict] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [token, setToken] = useState(null);
  const user = useRouter();
  useEffect(() => {
    const tok = localStorage.getItem("token");
    console.log("welcome" + tok);
    console.log("sucess abi");
    console.log(email);
    if (sentemail && sentdistrict) {
      console.log(sentdistrict);
      console.log("sucess gowtham");
      fetch("http://192.168.68.121:8080/api/candidates/verify-and-get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tok}`,
        },
        body: JSON.stringify({ sentemail, sentdistrict }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sucess");
          console.log("sucees", data);
          setCandidates(data);
          localStorage.setItem("candidates", JSON.stringify(data));
           localStorage.setItem("token",JSON.stringify(tok));
          user.push(`/Votetable?email=${encodeURIComponent(sentemail)}`);
        })
        .catch((err) => console.error("Error in candidate API:", err));
    }
  }, [sentemail, sentdistrict]);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    if (!email) {
      seterrorm("Email can not be null");
      setTimeout(() => {
        seterrorm(null);
      }, 5000);
      return;
    }
    if (!password) {
      seterrorpass("Password cannot be null");
      return;
    }
    try {
      const response = await fetch(
        "http://192.168.68.121:8080/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      console.log("jwt");
      console.log(response);
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        seterrorm(result.message || "Login failed");
        return;
      }

      console.log(result.email);
      console.log("districr" + result.token);
      console.log(result.location);
      setsentemail(result.email);
      setsentdistrict(result.district);
   const storedToken=    localStorage.setItem("token", result.token);
   if (storedToken) {
    setToken(storedToken);
  }
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
        {/* i need to check */}
        <form onSubmit={handlelogin} className="form-box">
          <h4> User Login</h4>

          <div className="mb-3">
            <label className="mb-3" htmlFor="email">
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
            <label className="mb-3" htmlFor="password">
              Enter the Voter id to vote
            </label>
            {errorpass && <p className="error">{errorpass}</p>}
            <input
              value={password}
              id="password"
              type=""
              onChange={(e) => setpassword(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn bg-warning text-primary change btn-sm w-100"
            >
              Submit
            </button>
          </div>

          <div className="mb-3">
            <button
              type="button"
              onClick={signup}
              className="btn btn bg-warning text-primary change btn-sm w-100"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
