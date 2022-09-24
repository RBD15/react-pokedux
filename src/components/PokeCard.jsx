import React from "react";
import { useDispatch } from "react-redux";


function PokeCard({pokemon}){
    const dispatch = useDispatch()
    const addPokemon=()=>{
        dispatch({
            type:'pokemonsSlice/addPokemonFavList',
            payload:pokemon
        })
    }

    const removePokemon=()=>{
        dispatch({
            type:'pokemonsSlice/removePokemonFavList',
            payload:pokemon
        })
    }

    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{pokemon.name}</h4>
            </div>
            <div className="card-body">
                <div className="card-title pricing-card-title"><img src={pokemon.sprites.front_default} alt="" /></div>
                <ul className="list-unstyled mt-3 mb-4">
                    {pokemon.abilities.map(ability=>
                        <li>{ability.ability.name}</li>    
                    )}
                    
                </ul>
                {(()=>{
                    if(!pokemon.isFav){
                        return <button type="button" className="w-45 btn btn-lg btn-outline-primary mx-1" onClick={addPokemon}>Add</button>

                    }else{
                        return <button type="button" className="w-45 btn btn-lg btn-outline-danger mx-1" onClick={removePokemon} >Remove</button>
                    }
                })()
                }
            </div>
        </div>
    </div>
    );
}

export default PokeCard;