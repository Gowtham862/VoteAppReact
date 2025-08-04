import axios from "axios";

export const getalluser=(page:number)=>axios.get(`http://localhost:8080/api/users/getUserList?num=${page}`);