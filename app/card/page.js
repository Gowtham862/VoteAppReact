import React from "react";
import "./page.css";

const userdata = [
  {
    name: "TVK",
    city: "Vijay",
    profile:"/tvk.jpg"
  },
  {
    name: "DMK",
    city: "M.K STALIN",
       profile:"/dmk.jpg"
  },
  {
    name: "ADMK",
    city: " k Palaniswami ",
     profile:"/admk.avif"
  },
  {
    name: "DMDK",
    city: " Vijayakant",
      profile:"/tvk.jpg"
  },
  {
    name: "BJB",
    city: "Annamalai",
       profile:"/tvk.jpg"
  },
  {
    name: "INC",
    city: "Rahul",
       profile:"/tvk.jpg"
  },
];
function User(props) {
  return (
    <div className="cards">
      {/* <span className="player online">Football player</span> */}
      <img  src={props.profile} className="imgaa" alt="user" />
      <h3 className="heading">{props.name}</h3>
      <h3  className="heading my-3"> Name:{props.city}</h3>
      <p>
        politics is a powerful force that shapes societies, influences decisions,
        and determines the direction of a nation. It involves the process of
        making decisions that apply to members of a group or society, often
        through elected leaders and public participation. While politics 
      </p>
      <div className="button"></div>
      <div className="skills">
        <button  className="proved">Vote Now</button>
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
        />
      ))}
    </div>
  );
}
