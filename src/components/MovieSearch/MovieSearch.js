import React from 'react';

const MovieSearch = ({searchChange}) => {
    return (
        <div >
            <input 
                type='search' 
                className='' 
                placeholder='search movies'
                onChange={searchChange} 
            />
        </div>
    )
}

export default MovieSearch;
