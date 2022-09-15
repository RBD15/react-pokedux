import React from "react";

function Search(){

    return(
        <div className="row py-3">
            <div className="col">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
    );

}

export default Search;