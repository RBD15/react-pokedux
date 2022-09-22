import {SET_POKEMONS,ADD_POKEMON_LIST,REMOVE_POKEMON_LIST,SET_LOADING} from '../actions/type'
const initialState = {pokemons:[],favoriteList:[],loading:true};

export const pokemonsReducer= (state=initialState,action)=>
{
    let pokemonsList=[];
    let pokemonIndex=0;
    switch(action.type){
        case SET_POKEMONS:
            return {...state,pokemons:action.payload};
        case SET_LOADING:
            return {...state,loading:action.payload};
        case ADD_POKEMON_LIST:
            pokemonsList=[...state.pokemons]
            pokemonIndex=state.pokemons.findIndex(pokemon=>pokemon.name==action.payload.name)
            pokemonsList[pokemonIndex]={...pokemonsList[pokemonIndex],isFav:true}
            return {...state,pokemons:pokemonsList}
        case REMOVE_POKEMON_LIST:
            pokemonsList=[...state.pokemons]
            pokemonIndex=state.pokemons.findIndex(pokemon=>pokemon.name==action.payload.name)
            pokemonsList[pokemonIndex]={...pokemonsList[pokemonIndex],isFav:false}
            return {...state,pokemons:pokemonsList}
        default:
            return state;
    }

}