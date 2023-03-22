import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import MainPage from "../pages/mainPage";
import CharCard from '../charCard/charCard';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



function App() {

  const [user, setUser] = useState(localStorage.getItem('user'))
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  const onLogOut = () =>{
    localStorage.removeItem('user');
    setUser('')
  }

  if(!user){
    return(
      <div className='login'>
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
    </div>
    )
  }else{
    return (    
      <Router>
        <div className="App">     
        {/* Я не знав що робити з авторизацією далі, тому додав кнопку Log out.*/}
          <h5 className='logOut' onClick={()=>onLogOut()}>Log out</h5>
          <Routes>
            <Route path="/" element={<MainPage searchValue={searchValue} 
                                              setSearchValue={setSearchValue}/>} />
            <Route path="/characters/:id" element={<CharCard/>} />
            <Route path="*" element={'This page is not defined'}/>
          </Routes>
        </div>
      </Router>
    );
  }
  
}

export default App;
