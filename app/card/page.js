"use client";
// import React from "react";
import React, { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const palani = [
  {
    name: "TVK",
    city: "Gowtham",
    profile: "/tvkvijay.webp",
    vote: " Tvk",
  },
  {
    name: "DMK",
    city: "Selvaraj",
    profile: "/dmk2.webp",
    vote: " Dmk",
  },
  {
    name: "ADMK",
    city: "Abishek",
    profile: "/admkk.png",
    vote: " Admk",
  },
  {
    name: "DMDK",
    city: "Selvaganesh",
    profile: "/go.png",
    vote: " Dmdk",
  },
  {
    name: "BJp",
    city: "Arun",
    profile: "/Bjb.webp",
    vote: " Bjp",
  },
  {
    name: "INC",
    city: "Kalaigowtham",
    profile: "/inc.webp",
    vote: " Inc",
  },
];
const chennai = [
  {
    name: "TVK",
    city: "Vijay",
    profile: "/tvkvijay.webp",
    vote: " Tvk",
  },
  {
    name: "DMK",
    city: "M.K STALIN",
    profile: "/dmk2.webp",
    vote: " Dmk",
  },
  {
    name: "ADMK",
    city: " k Palaniswami ",
    profile: "/admkk.png",
    vote: " Admk",
  },
  {
    name: "DMDK",
    city: " Vijayakant",
    profile: "/go.png",
    vote: " Dmdk",
  },
  {
    name: "BJp",
    city: "Annamalai",
    profile: "/Bjb.webp",
    vote: " Bjp",
  },
  {
    name: "INC",
    city: "Rahul",
    profile: "/inc.webp",
    vote: " Inc",
  },
];

function User(props) {
  const [show, setShow] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [message, setmessage] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    console.log(email);
    const stored = localStorage.getItem("candidates");
    if (stored) {
      setCandidates(JSON.parse(stored));
    }
  }, []);
  // const[hasvoted,sethasvoted]=useState("");
  const router = useRouter();
  const votenow = async (e) => {
    e.preventDefault();

    console.log("Selected Party:", props.name);
    try {
      // console.log("hlo",party);
      const party = props.name;
      console.log(party);
      // router.push('/home');
      const response = await fetch(
        "http://192.168.68.105:8080/api/votes/increment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, party }),
        }
      );

      const result = await response.text();
      setmessage(result);
      if (!result) {
      }
      if (result) {
        // alert(result);
        setShow(true);
        setTimeout(() => setShow(false), 8000);
        // alert("your vote added successfully");
      } else {
      }

      console.log(result);
    } catch (error) {
      console.error("Error signing up:", error);
    }

    // console.log(props.name);
  };
  return (
    <div className="cards">
      {/* <span className="player online">Football player</span> */}
      <img src={props.profile} className="imgaa" alt="user" />
        {candidates.map((item, index) => (
        <div key={index} >
           {/* <h3 key={index} className="heading h4">{candidates[0].district}</h3> */}
        </div>
      ))}
      <h3 className="heading h4">{props.name}</h3>
      <h3 className="heading my-3 h5"> Name:{props.city}</h3>
      <p>
        politics is a powerful force that shapes societies, influences
        decisions, and determines the direction of a nation. It involves the
        process of making decisions that apply to members of a group or society,
        often through elected leaders and public participation. While politics
      </p>
      {/* <h6>Email: {email}</h6> */}
      <div className="button"></div>
      <div className="skills">
        <div className="con">
          <div className="toas">
            {show && (
              <div className="ttt">
                {message}
                <span onClick={close}>&times;</span>
              </div>
            )}
          </div>
        </div>
        <button onClick={votenow} className="proved">
          vote for{props.vote}
        </button>
      </div>
    
    </div>
  );
}

export default function card() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("candidates");
    if (storedData) {
      setCandidates(JSON.parse(storedData));
    }
  }, []);
  const [hasVoted, setHasVoted] = useState(false);
  const choice = chennai;
  return (
    <div className="center">
      {choice.map((use, inder) => (
        <User
          key={inder}
          name={use.name}
          city={use.city}
          skills={use.skills}
          profile={use.profile}
          vote={use.vote}
          hasVoted={hasVoted}
          setHasVoted={setHasVoted}
        />
      ))}
    </div>
  );
}
