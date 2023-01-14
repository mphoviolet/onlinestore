import React from 'react';
import './HeaderStyles.css';
import { FaSearch } from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search'>
      <input type='text'
            className='inputBox'
            placeholder='Search something here...'
      />
      <div className='icon-search'>
        <FaSearch />
      </div>
      <button>Search</button>
    </div>
  );
}

export default Search;
