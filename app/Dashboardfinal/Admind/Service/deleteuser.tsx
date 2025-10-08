
import axios from 'axios';
export const deleteuse=(id:any)=>axios.post(`http://localhost:8080/api/users/${id}/delete`);

