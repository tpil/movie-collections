import React, { Component } from 'react';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import User from '../components/User/User';
import Results from '../components/Results/Results';
//import Pagination from '../components/Pagination/Pagination';
import { Pagination } from 'semantic-ui-react'
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state ={
            route:'home',
            movieTerm :'',
            movies: [],
            activePage:1,
            total_pages:1
        }
    }



    onTermChange =(e) =>{
        this.setState({movieTerm:e.target.value});
        
        
    }
    onSearchSubmit =(term) =>{
        term.preventDefault(); //restict app to be reloaded
       
        console.log('the query term is:',this.state.movieTerm);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&include_adult=false&query=${this.state.movieTerm}`)
        .then(response => response.json())
        .then(data=>{
            this.setState({movies:data.results,total_pages:data.total_pages,activePage:1});
            console.log(data);
        });
        
       
    }

    onPageChange = (e, pageInfo) =>{
        this.setState({activePage: pageInfo.activePage}, ()=>{
            
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&page=${this.state.activePage}&include_adult=false&query=${this.state.movieTerm}`)
            .then(response => response.json())
            .then(data=>{
                this.setState({movies:data.results,total_pages:data.total_pages});
                console.log(data);
            });

        });

        
        
    }

    render() {
        return (
         
            <div className="app">  
                <User />
                <MovieSearch onTermChange={this.onTermChange} onSearchSubmit={this.onSearchSubmit} />
                <Results movies={this.state.movies}/>
                <section className="pages">
                <Pagination
                    activePage={this.state.activePage}
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={3}
                    totalPages={this.state.total_pages}
                    onPageChange ={this.onPageChange}
                />
                </section>

              
            </div>
        )
    }
}

export default App;
