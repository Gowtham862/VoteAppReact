"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import "./homepage.css";
function Homepage() {
    const [typingstatus,setypingstatus]=useState("created")
  return (
    <div className="homepage">
      <div className="left">
        <h4 className="text-white ai">GOWTHAM AI</h4>
        <h6 className="text-white">
          supercharge your creativity and productivity
        </h6>
        <h6 className="text-white">
          Lorem ipsum dolor sit amet, consecarchitecto quos sol
        </h6>
        <Link href='/Ai'>
             <button className="text-white">Get start</button>
        </Link>
       
      </div>
      <div className="right">
        <div className="imagecontainer">
          <div className="bgcontainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className="bot" />
          <div className="chat">
            <img src={typingstatus==="created"?"/account.png":typingstatus==="vote"?"/vote7.png":typingstatus==="bot"?"./bot.png":""}  />
            <TypeAnimation
              sequence={[
                "Application is created by gowtham",
                2000,()=>{
                   setypingstatus("vote")
                },
                "This is Vote application",
                2000,()=>{
                     setypingstatus("bot")
                },
                "Ai can help you",
                2000,
                "backend is done by Abishek",
                2000,
              ]}
              wrapper="span"
              //   speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
