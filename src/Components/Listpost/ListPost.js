import React from 'react';
import Post from '../Post/Post';
import AddNewPost from '../AddNewPost/AddNewPost';

const ListPost = () => {
  return (
    <div className='listpost'>
      <Post/>
      <Post/>
      <AddNewPost/>

    </div>
  )
}

export default ListPost;