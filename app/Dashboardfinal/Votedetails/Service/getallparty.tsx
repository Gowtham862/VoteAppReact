import axios from "axios";
export const getallparty=(page:number)=>axios.get(`http://localhost:8080/candidates/getcandidate?num=${page}`);

export const deleteparty=(id:any)=>axios.post(`http://localhost:8080/candidates/${id}/deletecandi`);