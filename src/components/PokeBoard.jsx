import React from 'react'
import PokeCard from './PokeCard'

const PokeBoard = ({pokemons,nameFilter}) => {
  return (
    <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {(()=>{
        return pokemons.map(pokemon=>{
          if(nameFilter==='' || nameFilter===undefined){
            return <PokeCard key={pokemon.name} pokemon={pokemon}/>
          }else if(pokemon.name.includes(nameFilter)){
            return <PokeCard key={pokemon.name} pokemon={pokemon}/>
          }
        })  
        })()
      }
    </div>
</main>
  )
}

export default PokeBoard