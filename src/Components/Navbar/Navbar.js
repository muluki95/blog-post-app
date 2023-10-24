import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Nav'>
        <a href='/' className='blog-title'> My Blog Post</a>
        <ul>
            <li>
                <a href="/">Home</a>
                <a href="/addnewpost"> New Post</a>
            </li>
        </ul>

    </div>
  )
}

export default Navbar