"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import "../Votetable/vote.css";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";


const partyLogos = {
  TVK: "/tvkvijay.webp",
  DMK: "/dmk2.webp",
  ADMK: "/admkk.png",
  DMDK: "/go.png",
  BJP: "/Bjb.webp",
  INC: "/inc.webp",
};

export default function Page() {
  const logouthom=useRouter();
  const [candidates, setCandidates] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setmessage] = useState("");
  const [validtoken,setvalidtoken]=useState("");
  const searchParams = useSearchParams();
  const [votedParty, setVotedParty] = useState(null);
  
const logouthome=()=>{
logouthom.push('/user');
}

  const email = searchParams.get("email");
  const handle = async (party) => {
     if (votedParty !== null) return;
    console.log("Voted for:", party);
     setVotedParty(party); 

    try {
     
      console.log(party);
       console.log("notcomplede"+validtoken);
      const response = await fetch(
        "http://192.168.68.121:8080/api/votes/increment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
              Authorization: `Bearer ${validtoken}`,
          },
          body: JSON.stringify({ email, party }),
        }
      );

      const result = await response.text();
      setmessage(result);
      if (!result) {
      }
      if (result) {
       
        setShow(true);
        setTimeout(() => setShow(false), 5000);
        
      } else {
      }

      console.log(result);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  useEffect(() => {
    console.log(email);
    const stored = localStorage.getItem("candidates");
     const t = localStorage.getItem("token");
      console.log("complede"+t);
      setvalidtoken(t);
    if (stored&&t) {
      setCandidates(JSON.parse(stored));
       setvalidtoken(JSON.parse(t));
    }
  }, []);

  return (
    <div>
      <div className="header">
        <div className="scroll-text">
          🗳️ Make Your Vote Count. Stronger Democracy Begins With You!
          Democracies thrive when citizens participate. Your vote keeps the
          system strong and accountable.
        </div>
      </div>
        <div title="Logout" onClick={logouthome} className="logout"> <img className="logo rounded logo-icon " src="./exit.png"></img></div>
      <div className="voted">
        <table className="w-75 rounded table">
          <thead>
            <tr>
              {console.log("hlo sucess"+email)}
              {console.log(candidates)}
              <td className="bg-info text-dark">Name</td>
              <td className="bg-info text-dark">Candidate Name</td>
              <td className="bg-info text-dark">District</td>
              <td className="bg-info text-dark">logo</td>
              <td className="bg-info text-dark">vote</td>
            </tr>
          </thead>
          <tbody>
            {/* <th>hh</th> */}

            {candidates.map((item, index) => (
              <tr key={index}>
                <th className=" bg-secondary text-white" scope="row">
                  {item.partyName}
                </th>
                <td className=" bg-secondary text-white">
                  {item.candidateName}
                </td>
                <td className=" bg-secondary text-white">{item.district}</td>
                <td className="">
                  <img
                    src={partyLogos[item.partyName]}
                    width="40"
                    className="rounded"
                    alt={item.partyName}
                  />
                </td>
               
                <td>
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
                  <button
                    // className="bdesign rounded bg-danger"
                    className={`bdesign rounded ${
    votedParty === item.partyName ? "bg-success text-white" : "bg-danger text-dark"
  }`}
                    onClick={() => handle(item.partyName)}
                     disabled={votedParty !== null}
                  >
                    <span className={votedParty === item.partyName ? "" : " "}>

                      {votedParty === item.partyName ? "Voted" : "Vote"}

                    </span>
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
