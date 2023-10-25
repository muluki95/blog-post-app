import React from 'react';
import './Search.css';
import {MdSearch} from 'react-icons/md';

const Search = ({handleSearchPost}) => {
  return (
    <div className='search-bar'>
       
        <input onChange={(event)=> handleSearchPost(event.target.value)} className='search' type="text" placeholder="Search here" />
        <MdSearch className='search-icon' size='1.3rem'/>
       
    </div>
  );
};

export default Search;