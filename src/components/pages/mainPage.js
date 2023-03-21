import React from 'react';
// import './MainPage.css';
import { useState } from 'react';
import Header from '../header/Header';
import CharactersList from '../charactersList/CharactersList';

const MainPage = ({ searchValue, setSearchValue, onSelectChar }) => {

  // const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');
  
  return (
    <div className="MainPage">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <CharactersList searchValue={searchValue} onSelectChar={onSelectChar} />
    </div>
  );
};

export default MainPage;
