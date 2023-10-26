import React, {useState, useEffect} from "react";
import{nanoid} from "nanoid";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import ListPost from "./Components/Listpost/ListPost";
import AddNewPost from "./Components/AddNewPost/AddNewPost";
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  const [posts, setPosts] = useState([
{id: nanoid(), text: 'This is my first post', date: '10/15/2023'},
{id: nanoid(), text:'This is another post', date: '10/19/2023'},
{id:nanoid(), text: 'This is the 3rd one this month',date: '10/21/2023'},

]);

const [searchText, setSearchText]= useState('');

useEffect(()=>{
 const savedPosts =JSON.parse(localStorage.getItem('blog-post-app-data')
 );
 if (savedPosts) {
  setPosts(savedPosts);
 }
}, []);

useEffect(() => {
   localStorage.setItem('blog-post-app-data', JSON.stringify(posts))//fetch data here and update posts state with fetched data.
}, [posts])



const addNewPost =(text) => {
   const date= new Date();
   const newPost ={
       id: nanoid(),
       text: text,
       date: date.toLocaleDateString()
   }
   const newPosts =[...posts, newPost];
   setPosts(newPosts);
};
    const deletePost =(id) => {
      const newPosts = posts.filter((post)=> post.id !==id);
      setPosts(newPosts)
    }

  return (
    <div className="App">
      <BrowserRouter>

     <Navbar/>
     <Search handleSearchPost={setSearchText}/>

    
     <Routes>
      <Route path='/' element={<ListPost 
      posts={posts.filter((post)=> post.text.toLowerCase().includes(searchText))}
      handleDeletePost={deletePost} />
       }> </Route>
      <Route path='/addnewpost' element={< AddNewPost handleAddNewPost={addNewPost}/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
};

export default App;
