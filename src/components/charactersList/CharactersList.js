import './charactersList.css';
import {useState, useEffect} from 'react';
import UseRickService from '../../services/rickService';

import { Link } from 'react-router-dom';

const CharactersList = ({searchValue, onSelectChar}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
       UseRickService()
       .then(data=>setCharacters(data.results))
       .catch(err=>console.log(err))
    }, []);
    
    const filteredPosts = characters.filter((post) => {
        const name = post.name.toLowerCase();
        const search = searchValue ? searchValue.toLowerCase() : "";
            return name.includes(search);
        }).sort((a, b) => a.name > b.name ? 1 : -1);
    

    const createList = (arr) => {
        const listItems = arr.map((char) => {
            return(
            <Link to={`/characters/${char.id}`} key={char.id} onClick={() => onSelectChar(char.id)}>
                <li className="char__item">
                    <img src={char.image} alt={char.name} className="char_img"/>
                    <div className="char__name">{char.name}</div>
                    <h4>{char.species}</h4>
                </li>
            </Link>
            )
        })
        return (
            <ul className="char__list">
                {listItems}
            </ul>
        )
    }

    const charList = createList(filteredPosts)

    return (
        <div className="char__list__wrapper">
            {charList}
        </div>

    )
}


export default CharactersList;