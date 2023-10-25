import React from 'react';
import './Navbar.css';
import{Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Nav'>
        <a href='/' className='blog-title'> My Blog Post</a>
        <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/addnewpost"> New Post</Link>
                
            </li>
        </ul>

    </div>
  )
}

export default Navbar