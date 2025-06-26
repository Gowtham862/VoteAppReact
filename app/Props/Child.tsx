import React from 'react'
interface childprops{
    // greeting:string;
     name: string;
  message: string;
}

const Child:React.FC<childprops>=({name,message})=> {
    return (
        <div>
            <p>{name}</p>
             <p>{message}</p>
             <p>welcome</p>
        </div>
    )
}

export default Child
