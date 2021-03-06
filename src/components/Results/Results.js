import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Results.css';

const Results = ({movies}) => {


    const list = movies.map((movie,index) => {

        return <MovieCard key={index} image={"https://www.themoviedb.org/t/p/w500"+movie.poster_path+""} title={movie.title} rating={movie.vote_average}/>;
            
     });
      let pages =list.length/6;
     
     return (  
     <div className='movies-container'>
         <div className="ui six  cards">
             {list}
         </div>
    </div>);
 }

export default Results
