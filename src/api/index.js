export const getPokemons= async()=>{
    const pokemons= await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
    .then(res=>res.json().then(
        res=> res.results
    )).catch(err=>console.log(err))
    return pokemons

}

export const getPokemon= async(url)=>{
    const pokemon= await fetch(url)
    .then(res=>res.json().then(
        res=> res
    )).catch(err=>console.log(err))
    return pokemon

}