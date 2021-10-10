import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './Header.css';
import DarkMode from '../UI components/DarkMode';

const Header = ({searchedText}) => {
  // Definig States
  const [searchText, setSearchText] = useState('');
  const [deleteBtnIsAppeared, setDeleteBtnIsAppeared] = useState(false);

  // Functions
  const inputChangeHandler = (event) => {
    setSearchText(event.target.value);
  }

  const deleteSearchedTextHandler = (event) => {
    event.preventDefault();
    setSearchText('');
    setDeleteBtnIsAppeared(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      searchText: searchText
    }
    searchedText(data)
  }

  useEffect(()=> {
    if(searchText.trim().length !== 0) {
      setDeleteBtnIsAppeared(true);
    }  else {
      setDeleteBtnIsAppeared(false);
    }
  }, [searchText])
  

  return (
    <header className='header'>
      <a href="https://www.youtube.com">
        <img src='https://live.staticflickr.com/3323/3606295240_51f643dd5d_b.jpg' alt="Logo" style={{width: '12.5rem'}} />
      </a> 
      <form className='input-search' onSubmit={formSubmitHandler}>
        <input 
          type="text"
          placeholder='Search'
          autoFocus
          value={searchText}
          onChange={inputChangeHandler}
        />
        <button 
          className={`clear-text ${deleteBtnIsAppeared && 'display'}`}
          type='reset'
          onClick={deleteSearchedTextHandler}
        >
          &#10005;
        </button>
        <button className='search-icon' type='submit' >
          <Icon icon="fe:search" />
        </button>
      </form>
      <DarkMode />
    </header>
  )
}

export default Header
