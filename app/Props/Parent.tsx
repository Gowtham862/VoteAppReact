import React from 'react'
import Child from './Child'

function Parent() {
    const message="you success";
    const name="kalai";

    return (
        <div>
            <Child name={name} message={message}/>
          
        </div>
    )
}

export default Parent
