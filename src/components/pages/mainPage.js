import React from 'react';
import Header from '../header/Header';
import CharactersList from '../charactersList/CharactersList';

const MainPage = ({ searchValue, setSearchValue, onSelectChar }) => {
  
  return (
    <div className="MainPage">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <CharactersList searchValue={searchValue}/>
    </div>
  );
};

export default MainPage;
