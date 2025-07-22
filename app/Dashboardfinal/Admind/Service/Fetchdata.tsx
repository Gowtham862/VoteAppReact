import { useState, useEffect } from "react";

const useFetch = (url: any) => {
  const [dis, setdis] = useState([]);
  const handle = fetch(url, {
    // method: "DELETE",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("sucess" + data);
      setdis(data);
    });
  return [dis];
};
export default useFetch;
