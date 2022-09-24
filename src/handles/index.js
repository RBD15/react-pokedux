import {getPokemon, getPokemons} from '../api/index'

export const handlePokemons= async()=>{
        const pokes= await getPokemons()
        const pokeDetails= await Promise.all(pokes.map(poke=>{
          return getPokemon(poke.url).then(
            res=> {
              const data={...res,'isFav':false}
              const pokemonWithDetails={...poke,...data}
              return pokemonWithDetails;
            }
          )  
       }))
       return pokeDetails
}