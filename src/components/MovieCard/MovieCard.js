import React,{useEffect,useState}from 'react';

const MovieCard = ({id,image,title,rating,onMovieClick}) => {


    return (
      
            <div id={id} className="card"  onClick={onMovieClick}>
            <div className="image" >
                    <img src={image}/>
                </div>
                <div className="extra">
                    <h5 style={{'textAlign':'center'}}>{title}</h5>
                   
                    <div className="ui star rating right floated" data-rating="4"> <b>Rating:  </b>{rating}</div>
                </div>
            </div>
      
    )
}

export default MovieCard;