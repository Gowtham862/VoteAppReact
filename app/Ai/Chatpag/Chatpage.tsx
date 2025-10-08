"use client"
import React from 'react'
// import {Link }from 'react-router-dom'
import Link from 'next/link'
import './chatpage.scss'
function    chatpage() {
    return (
        <div className='chat'>
          <span>DhASHBOARD</span>
          <Link className='remove' href="/Ai">New Chat</Link>
            <Link className='remove' href="/Ai">Explore G AI</Link>
              <Link className='remove' href="/Ai">contact</Link>
              <hr />
              <span className='tittle' >RECENT CHATS</span>
              <div className="list">
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              <Link className='remove' href="/Ai">Chat list</Link>
              </div>
              <hr />
              <div className="upgrade">
                    {/* <img src="" alt="" /> */}
                    <span>upgrade to G AI pro</span>
                    <span>Get unlimited access</span>
              </div>
        </div>
    )
}

export default chatpage
