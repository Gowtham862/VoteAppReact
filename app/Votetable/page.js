"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import "../Votetable/vote.css";
import { useRouter } from "next/navigation";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSearchParams } from "next/navigation";

 const partyLogos=
  {
      ADMK: "admkk.png",
   TVk:"tvkvijay.webp",
  DMK: "dmk2.webp",
  INC:"inc.webp",
  Bjp: "Bjb.webp",
  DMDK: "go.png"
  }
 



export default function Page() {
  const logouthom = useRouter();
  const [candidates, setCandidates] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setmessage] = useState("");
  const [validtoken, setvalidtoken] = useState("");
  const searchParams = useSearchParams();
  const [votedParty, setVotedParty] = useState(null);
  const [candidateId,setCandidateId]=useState("");

  const logouthome = () => {
    logouthom.push("/user");
  };
    
  const userId = searchParams.get("email");
  const handle = async (partyId,CandiId) => {
    if (votedParty !== null)
       return;
    // console.log("partyId:", partyId);
    // console.log("candiId",CandiId);
      let candidateId=CandiId;

    setVotedParty(partyId);

    try {
      console.log(userId);
      console.log(candidateId);
      console.log(partyId)
      // console.log("notcomplede" + validtoken);
      const response = await fetch(
        "http://localhost:8080/api/voting/cast",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${validtoken}`,
          },

          body: JSON.stringify({userId,candidateId, partyId}),

        }
      );

      const result = await response.text();
      setmessage(result);
      if (!result) {
      }
      if (result) {
        setShow(true);
        setTimeout(() => setShow(false),5000);
      } else {
      }

      console.log(result);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
    const close=(()=>{
      setShow(false);
    })
  useEffect(() => {
    // console.log(email);
    const stored = localStorage.getItem("candidates");
     setCandidates(JSON.parse(stored));
     console.log("sucess"+stored);
    // const t = localStorage.getItem("token");
    // console.log("complede" + t);
    // setvalidtoken(t);
    // if (stored && t) {
    //   setCandidates(JSON.parse(stored));
    //   setvalidtoken(JSON.parse(t));
    // }
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
      <div title="Logout" onClick={logouthome} className="logout">
        {" "}
        <RiLogoutBoxFill title="logout" size={29} />
      </div>
      <div className="voted">
        <table className="w-75 rounded table">
          <thead>
            <tr>
              {/* {console.log("hlo sucess" + email)} */}
              {console.log(candidates)}
              <th  className="bg-info text-dark">Name</th>
              <th className="bg-info text-dark">Candidate Name</th>
              <th className="bg-info text-dark">District</th>
              <th className="bg-info text-dark">logo</th>
              <th className="bg-info text-dark">vote</th>
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
                  {item.candiName}
                </td>
                <td className=" bg-secondary text-white">{item.districtName}</td>
                <td className="">
          
                  <img
                    src={partyLogos[item.partyName]}
                    // src={item.partySymbol}
                    //  src={`data:image/png;base64,${item.partySymbol}`}
                    // src='./exit.png'
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
                  {/* {console.log("votedParty", votedParty, "item", item.partyId)} */}
                  <button
                    // className="bdesign rounded bg-danger"
                    className={`bdesign rounded ${
                      votedParty == item.partyId
                        ? "bg-danger text-white"
                        : "bg-secondary text-dark"
                    }`}
                    
                    onClick={() => handle(item.partyId,item.candiId)}
                    disabled={votedParty !== null}
                  >
                    

                    <span className={votedParty === item.partyId ? "" : " "}>
                      {votedParty === item.partyId ? "Voted" : "Vote"}
                     
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
