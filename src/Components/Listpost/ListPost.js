import React from 'react';
import './ListPost.css';
import Post from '../Post/Post';


const ListPost = ({posts, handleDeletePost }) => {
  return (
    <div className='listpost'>
      {posts.map((post) => <Post id={post.id} text={post.text} date={post.date} handleDeletePost={handleDeletePost} 
      />)}
      

    </div>
  )
}

export default ListPost;