import React from 'react';
import './Post.css';
import {MdDeleteForever} from 'react-icons/md';

const Post = () => {
  return (
    <div className='post'>
        <span> This is my 1st post </span>
        <div className='post-footer'>
            <small> 10/23/2023</small>
            <MdDeleteForever  className='delete-icon' size='1.3rem'/>
        </div>
       

    </div>
  )
}

export default Post