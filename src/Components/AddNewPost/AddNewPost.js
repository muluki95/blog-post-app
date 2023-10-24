import React from 'react';
import './AddNewPost.css';

const AddNewPost = () => {
  return (
    <div className='addnewpost'>
    <textarea 
rows='15' 
cols='15'
 placeholder='Type here to add a new blog post...' >

    </textarea> 
    <div>
        <button className='save' type="submit">Save Post</button>
    </div>
         
    </div>
  )
}

export default AddNewPost