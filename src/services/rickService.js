const UseRickService = async () =>{
return await fetch('https://rickandmortyapi.com/api/character')
          .then((response) => response.json())
          .catch(error => console.log(error))
        }
       

export default UseRickService;