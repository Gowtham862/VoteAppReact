"use client"
import React from "react";
import "./page.css";
import { useRouter } from "next/navigation";



const userdata = [
  {
    name: "TVK",
    city: "Vijay",
    profile:"/tvkvijay.webp",
    vote:" Tvk"
  },
  {
    name: "DMK",
    city: "M.K STALIN",
       profile:"/dmk2.webp",
       vote:" Dmk"
  },
  {
    name: "ADMK",
    city: " k Palaniswami ",
     profile:"/admkk.png",
      vote:" Admk"
  },
  {
    name: "DMDK",
    city: " Vijayakant",
      profile:"/go.png",
       vote:" Dmdk"
  },
  {
    name: "BJp",
    city: "Annamalai",
       profile:"/Bjb.webp",
       vote:" Bjp"
  },
  {
    name: "INC",
    city: "Rahul",
       profile:"/inc.webp",
       vote:" Inc"
  },
];

function User(props) {

    const router = useRouter();
//  console.log("Selected Party:", props.name);
  const votenow = async (e) => {
     e.preventDefault();
    console.log("Selected Party:", props.name);
        try {
      // console.log("hlo",party);
      const party=    props.name;
       console.log(party);
      router.push('/home'); 
      const response = await fetch("http://192.168.68.124:8080/api/votes/increment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({party: party }),
      });
 
      const result = await response.text();
      alert(result);
      console.log(result);
      
    } catch (error) {
      console.error("Error signing up:", error);
    }

 // console.log(props.name);
   
    
      // router.push(`/voted?party=${props.name}`);
  };
  return (
    <div className="cards">
      {/* <span className="player online">Football player</span> */}
      <img  src={props.profile} className="imgaa" alt="user" />
      <h3 className="heading h4">{props.name}</h3>
      <h3  className="heading my-3 h5"> Name:{props.city}</h3>
      <p>
        politics is a powerful force that shapes societies, influences decisions,
        and determines the direction of a nation. It involves the process of
        making decisions that apply to members of a group or society, often
        through elected leaders and public participation. While politics 
      </p>
      <div className="button"></div>
      <div className="skills">
        <button onClick={votenow}  className="proved">vote for{props.vote}</button>
      </div>
    </div>
  );
}

export default function card() {
  return (
    <div className="center">
      {userdata.map((user, inder) => (
        <User
          key={inder}
          name={user.name}
          city={user.city}
          skills={user.skills}
          profile={user.profile}
          vote={user.vote}
        />
      ))}
    </div>
  );
}
