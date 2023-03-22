const UseChar = async (id) =>{
return await fetch(`https://rickandmortyapi.com/api/character/${id.selectedChar}`)
            .then((response) => response.json())
            .catch(error => console.log(error))
        } 
export default UseChar;