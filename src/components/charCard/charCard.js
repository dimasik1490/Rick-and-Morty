import './charCard.css'

import UseChar from '../../services/charService';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CharCard = (selectedChar) => {

    const [char, setChar] = useState(selectedChar)

    console.log(char)

    useEffect(() => {
            UseChar(selectedChar)
            .then(data => setChar(data))
            .catch(err => console.log(err))
    }, []);


    return(
        <>
        <Link to={"/"}>
            <button className="go_back__btn">Go back</button>
        </Link>
        <div className="char_card">
            <div className="char_card_content">
                <img src={char.image} alt={char.name} className="charImg"/>
                <h1 className="char_name">{char.name}</h1>
                <p className="info_title">Informations</p>
                <ul className="info_list">
                    <li className="info_item">
                        <h3 className="info_key">Gender</h3>
                        <h4 className="info_value">{char.gender}</h4>
                    </li>
                    <li className="info_item">
                        <h3 className="info_key">Status</h3>
                        <h4 className="info_value">{char.status}</h4>
                    </li>
                    <li className="info_item">
                        <h3 className="info_key">Specie</h3>
                        <h4 className="info_value">{char.species}</h4>
                    </li>
                    <li className="info_item">
                        <h3 className="info_key">Origin</h3>
                        {char.origin ? <h4 className="info_value">{char.origin.name}</h4> : null}
                    </li>
                    {/* Пункту type немає в багатьох персонажів, тому є первірка на його присутність, 
                    щоб не відмальовувати пустий елемент */}
                    {char.type ? 
                    <li className="info_item">
                        <h3 className="info_key">Type</h3>
                        <h4 className="info_value">{char.type}</h4>
                    </li> 
                    :null}
                </ul>
            </div>
        </div>
        </>
    )
}

export default CharCard;