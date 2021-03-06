import React from 'react';

const MovieCard = ({image,title,rating}) => {
    return (
      
            <div className="card">
                <div className="image" >
                    <img src={image}/>
                </div>
                <div className="extra">
                    <h5>{title}</h5>
                    Rating:
                    <div className="ui star rating" data-rating="4"></div>
                </div>
            </div>
      
    )
}

export default MovieCard;
