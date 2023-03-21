import './charCard.css'
import UseChar from '../../services/charService';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CharCard = (selectedChar) => {


  useEffect(() => {
    UseChar(selectedChar)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [selectedChar]);


    return(
        <>
        <Link to={"/"}>
            <button className="go_back__btn">Go back</button>
        </Link>
        <div className="char_card">
            <div className="char_card_header">
            </div>
            <div className="char_card_content">
                <img src="" alt="" className="charImg"/>
                <h1 className="char_name">{}</h1>
                <p className="info_title">Informations</p>
                <ul className="info_list">
                    <li className="info_item">
                        <div className="info_key">{}</div>
                        <h4 className="info_value">{}</h4>
                    </li>
                    <li className="info_item">
                        <div className="info_key">{}</div>
                        <h4 className="info_value"></h4>
                    </li>
                    <li className="info_item">
                        <div className="info_key">{}</div>
                        <h4 className="info_value"></h4>
                    </li>
                    <li className="info_item">
                        <div className="info_key">{}</div>
                        <h4 className="info_value"></h4>
                    </li>
                    <li className="info_item">
                        <div className="info_key">{}</div>
                        <h4 className="info_value"></h4>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default CharCard;