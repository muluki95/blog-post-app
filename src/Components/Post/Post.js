import React from 'react';
import './Post.css';
import {MdDeleteForever} from 'react-icons/md';

const Post = ({id, text, date, handleDeletePost }) => {
  return (
    <div className='post'>
       
        <span>{text}</span>
        <div className='post-footer'>
        <small>{date}</small>
        <div className='icons'>
           <MdDeleteForever onClick={()=> handleDeletePost(id)} className='delete-icon' size='1.3rem'/>
           </div>
        </div>
       

    </div>
  )
}

export default Post