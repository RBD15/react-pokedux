import { createSlice } from "@reduxjs/toolkit"

const initialState={pokemons:[],loading:true};

export const pokemonsSlice = createSlice({
    name:'pokemonsSlice',
    initialState,
    reducers: {
        setPokemons: (state,action)=>{
            state.pokemons=action.payload
        },
        addPokemonFavList: (state,action)=>{
            const pokemonIndex=state.pokemons.findIndex(pokemon=>pokemon.name==action.payload.name)
            state.pokemons[pokemonIndex]=!state.pokemons[pokemonIndex].isFav;
        },
        removePokemonFavList: (state,action)=>{
            const pokemonIndex=state.pokemons.findIndex(pokemon=>pokemon.name==action.payload.name)
            state.pokemons[pokemonIndex]=!state.pokemons[pokemonIndex].isFav;
        },
        toggleLoading: (state,action)=>{
            state.loading=action.payload;
        }
    }

})


export const {setPokemons,addPokemonFavList,removePokemonFavList,toggleLoading} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;