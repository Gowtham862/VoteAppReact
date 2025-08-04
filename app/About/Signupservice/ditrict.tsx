import axios from 'axios';
 export const fetchdistricts=()=>axios.get("http://localhost:8080/district/all")



export const kalai=((a:number,b:number)=>{
    
    return a+b
})
