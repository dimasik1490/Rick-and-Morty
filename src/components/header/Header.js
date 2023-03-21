import {useState, useEffect} from 'react'

import logo from '../../resources/images/logo.png'
import './header.css'

const Header = ({ searchValue, setSearchValue }) =>{

    const handleSearchChange = (e) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
        localStorage.setItem('searchValue', newValue);
      } 
    
    return (
        <div className="wrapper">
            <img src={logo} alt="logo"
                className="logo__img"/>
            <input type="text" 
                className="filter__form__input"
                placeholder='Filter by name...'
                value={searchValue}
                onChange={handleSearchChange}/>
        </div>
    )
}

// const Header = ({ searchValue, setSearchValue }) =>{
//     const handleSearchChange = (e) => {
//       const newValue = e.target.value;
//       setSearchValue(newValue);
//       localStorage.setItem('searchValue', newValue);
//     } 
      
//     return (
//       <div className="wrapper">
//           <img src={logo} alt="logo"
//                 className="logo__img"/>
//             <input type="text" 
//                 className="filter__form__input"
//                 placeholder='Filter by name...'
//                 value={searchValue}
//                 onChange={handleSearchChange}/>
//       </div>
// //     )
//     )
//   }
  

export default Header;
