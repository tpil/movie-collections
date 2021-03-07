import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Results.css';

const Results = ({movies,onMovieClick}) => {
    
   

    const list = movies.map((movie,index) => {

        return (
        <MovieCard 
            key={index} 
            id={index}
            image={"https://www.themoviedb.org/t/p/w500"+movie.poster_path+""} 
            title={movie.title} 
            rating={movie.vote_average} 
            onMovieClick={onMovieClick}
        />
         
        )
            
     });
     
     

     return (  
     <div className='movies-container'>
         <div className="ui link cards">
             {list}
         </div>
    </div>);
 }

export default Results
