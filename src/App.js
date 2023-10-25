import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ListPost from "./Components/Listpost/ListPost";
import AddNewPost from "./Components/AddNewPost/AddNewPost";
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path='/' element={<ListPost />}></Route>
      <Route path='/addnewpost' element={< AddNewPost/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
