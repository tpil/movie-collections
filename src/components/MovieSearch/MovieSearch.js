import React from 'react';
import './MovieSearch.css';

const MovieSearch = ({onSearchSubmit,onTermChange}) => {

    return (
          
        <div className="searchInput">              
            <form onSubmit={onSearchSubmit}>
                <div className="ui inverted transparent icon input">
                
                    <input 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            placeholder='search movies'
                            onChange={onTermChange}
                            />
                        <i className="search icon large" style={{'color':'white'}}></i>
                </div>
            </form>      
        </div>
    )
}

export default MovieSearch;