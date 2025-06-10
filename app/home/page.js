"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const back = () => {
    router.push("/");
  };
  return (
    <div className="bcolor">
    
        <img
          src="/cr7.jpg"
          className="img-fluid float-start me-3 "
          alt="Responsive image"
          width="500px"
        ></img>
        <h4>Introduction:</h4>
        <p>
          Vote App was born from a simple yet powerful idea — to bring voting
          into the modern digital age. In a world that’s increasingly moving
          toward digitization, the need for an online platform that could host
          safe, secure, and accessible voting became more apparent than ever.
          Whether it’s a school election, a corporate decision, or a community
          poll, voting plays a central role in democratic engagement. We created
          Vote App to ensure that this process is no longer limited by
          geography, logistics, or outdated technology. organizati At Vote App, we envision a world where technology brid.
        </p>
      
      <h4 >Our Vision:</h4>
      <p >
        At Vote App, we envision a world where technology bridges gaps between
        people and decision-making. A world where everyone’s voice matters and
        is counted — fairly, accurately, and instantly. Our vision is to be the
        most trusted online voting platform for individuals, organizations, and
        institutions across the globe. We believe that technology should
        empower, not complicate, and that’s why we’ve our hlo vision to complete focused on building an app
        that is both powerful and easy .welcome to the vote app to save your time and otheer than that we developed a lot feature.     </p>
        <img
          src="/bb.jpg"
          className="img-fluid float-end"
          alt="Responsive image"
          width="360px"
        ></img>
        <h4>Our Story:</h4>
        <p >The idea for Vote App was conceived during a local university election that faced significant
           delays due to paper-based voting. Voter turnout was low, counting was error-prone, 
           and the process lacked transparency. Inspired by this challenge, a group of young developers
            and civic tech enthusiasts came together to build a platform that could simplify voting without 
            compromising its integrity.Inspired by this challenge, a group of young developers
            and civic tech enthusiasts came together  At Vote App, we envision a world where technology bridges gaps between
        people and decision-making. A world where everyone’s voice matters and
        is counted — fairly, accurately, and instantly. Our vision is to be the
        most trusted online voting platform for individuals, organizati At Vote App, we envision a world where technology bridges gaps between
        people and decision-making. A world where everyone’s voice matters and
        is counted — fairly, accurately, and instantly. Our vision is to be the
          platform that could simplify voting without  After months of design, development, and testing, 
            Vote App was launched — and we haven’t looked back since.</p>
           <button className="btn btn-primary btn-sm w-5" onClick={back}>Back to home</button>
             <div  className="d-flex justify-content-center  align-items-center" >Thank you for visiting</div>
    </div>
  );
}
