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

// export const handlePokemons= async()=>{
//     const fetchPokemons=async()=>{
//         const pokes= await getPokemons()
//         const pokeDetails= await Promise.all(pokes.map(poke=>{
//           return getPokemon(poke.url).then(
//             res=> {
//               const pokemonWithDetails={...poke,...res}
//               return pokemonWithDetails;
//             }
//              )  
//        }))
//        return pokeDetails
//     }

//     const result = await fetchPokemons().then(res=>dispatch({
//         type:'SET_POKEMONS',
//         payload:res
//       })
// }