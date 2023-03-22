import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import MainPage from "../pages/mainPage";
import CharCard from '../charCard/charCard';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



function App() {

  const [user, setUser] = useState(localStorage.getItem('user'))
  const [selectedChar, setChar] = useState(null);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  const onSelectChar = (char) => {
    setChar(char);
  }

  const onLogOut = () =>{
    localStorage.removeItem('user');
    setUser('')
  }

  if(!user){
    return(
      <>
      <GoogleLogin
        onSuccess={credentialResponse => {
        var decoded = jwt_decode(credentialResponse.credential);
        setUser(decoded.email)
        localStorage.setItem('user', decoded.email)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />   
    </>
    )
  }else{
    return (    
      <Router>
        <div className="App">     
          <h5 className='logOut' onClick={()=>onLogOut()}>logOut</h5>
          <Routes>
            <Route path="/" element={<MainPage searchValue={searchValue} 
                                              setSearchValue={setSearchValue} 
                                              onSelectChar={onSelectChar}/>} />
            <Route path="/characters/:id" element={<CharCard selectedChar={selectedChar}
                                                             setChar={setChar}/>} />
          </Routes>
        </div>
      </Router>
    );
  }
  
}

export default App;
