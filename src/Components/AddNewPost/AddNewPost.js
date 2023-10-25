import React, {useState} from 'react';
import './AddNewPost.css';

const AddNewPost = ({handleAddNewPost}) => {
  const[newPost, setNewPost]= useState('');

  const handleChange = (event) => {

    setNewPost(event.target.value);

  }
  const handleSaveClick =() => {
    if(newPost.trim().length > 0){
  handleAddNewPost(newPost);
  setNewPost("");
    }
  };

  return (
    <div className='addnewpost'>
    <textarea rows='15' cols='15'placeholder='Type here to add a new blog post...'
    onChange={handleChange} value={newPost} >
    </textarea> 
    <div>
        <button className='save' type="submit" onClick={handleSaveClick}>Save Post</button>
    </div>
         
    </div>
  )
}

export default AddNewPost