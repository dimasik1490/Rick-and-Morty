import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import MainPage from "../pages/mainPage";
// import Header from '../header/Header'
// import CharactersList from '../charactersList/CharactersList';
import CharCard from '../charCard/charCard';

function App() {
  const [selectedChar, setChar] = useState(null);

  const onSelectChar = (char) => {
    setChar(char);
  }

  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  return (
    <Router>
      <div className="App">
        {/* <Header searchValue={searchValue} setSearchValue={setSearchValue}/> */}
        <Routes>
          <Route path="/" element={<MainPage searchValue={searchValue} 
                                            setSearchValue={setSearchValue} 
                                            onSelectChar={onSelectChar}/>} />
          {/* <Route path="/" element={<CharactersList searchValue={searchValue} onSelectChar={onSelectChar} />} /> */}
          <Route path="/characters/:id" element={<CharCard selectedChar={selectedChar}
                                                           setChar={setChar}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
