import React, { Component } from 'react';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import User from '../components/User/User';
import Results from '../components/Results/Results';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state ={
            route:'home',
            movieTerm :'',
            movies: [],
        }
    }



    onTermChange =(e) =>{
        this.setState({movieTerm:e.target.value});
        
        
    }
    onSearchSubmit =(term) =>{

       this.setState({movieTerm:term});     
        console.log(this.state.movieTerm);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&page=1&include_adult=false&query=${this.state.movieTerm}`)
        .then(response => response.json())
        .then(data=>this.setState({movies:data.results}))
        .then(console.log(this.state.movies));
       
    }

    render() {
        return (
            /*
            <User />
            <Input />
            <Results />
            */
            <div className="app">  
                <User />
                <MovieSearch onTermChange={this.onTermChange} onSearchSubmit={this.onSearchSubmit} />
                <Results movies={this.state.movies}/>
              
            </div>
        )
    }
}

export default App;
