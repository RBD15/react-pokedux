import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Loading from '../components/Loading'
import Header from "../components/Header";
import { useState } from "react";
import PokeBoard from "../components/PokeBoard";

function Main({pokemons}) {
    const loading= useSelector(state=>state.loading);
    const [nameFilter,setNameFilter]=useState('')
    const handleSearching=(filterName)=>{
        setNameFilter(filterName)
    }
    
    return (
        <Fragment>
            <div className="container py-3">
                <Header/>
                <SearchBar handleSearching={handleSearching}/>
                {loading && <Loading />}
                {!loading && <PokeBoard pokemons={pokemons} nameFilter={nameFilter} />}
            </div>
        </Fragment>
    );

}

export default Main;