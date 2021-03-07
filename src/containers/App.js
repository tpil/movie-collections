import React, { Component } from 'react';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import User from '../components/User/User';
import Results from '../components/Results/Results';
import { Pagination,Popup } from 'semantic-ui-react'
import './App.css';

const API_KEY='85204a8cc33baf447559fb6d51b18313';


class App extends Component {
    constructor(){
        super();

        this.state ={
            route:'home',
            movieTerm :'',
            movies: [],
            activePage:1,
            total_pages:0,
            pagination_visibility:'hidden',
            errors:'',
            popup:false,
            route:'search'
        }
        
    }

   
    onTermChange =(e) =>{
        this.setState({movieTerm:e.target.value});
        
        
    }
    onSearchSubmit =(term) =>{
        term.preventDefault(); //restict app to be reloaded
       
        if (this.state.movieTerm.length>2 && this.state.movieTerm.match(/^[0-9a-z]+$/)){
            this.setState({popup:false});
            //console.log('the query term is:',this.state.movieTerm);
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${this.state.movieTerm}`)
            .then(response => response.json())
            .then(data=>{
                this.setState({movies:data.results,total_pages:data.total_pages,activePage:1,pagination_visibility:'visible'});
                console.log(data);
            });  
        }else if (this.state.movieTerm.length<3 && this.state.movieTerm.length!==0){
            this.setState({errors:'you must type at least 3 characters',popup:true})
        }else{
            this.setState({errors:'You have typed invalid characters',popup:true})
        }

    }

    onPageChange = (e, pageInfo) =>{
        this.setState({activePage: pageInfo.activePage}, ()=>{
            
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${this.state.activePage}&include_adult=false&query=${this.state.movieTerm}`)
            .then(response => response.json())
            .then(data=>{
                this.setState({movies:data.results,total_pages:data.total_pages});
                console.log(data);
            });

        });

        
        
    }

    onMovieClick =(e) =>{
        //find movie id
        console.log(this.state.movies[e.currentTarget.id]);
        this.setState({route:'Details'});
        

    }

    render() {
        return (
         
            <div className="app">  
                <User />
              
                    <React.Fragment>
                        <Popup
                            content={this.state.errors}
                            open ={this.state.popup}
                            position='top center'
                            trigger={<MovieSearch onTermChange={this.onTermChange} onSearchSubmit={this.onSearchSubmit}/>}
                        />  
                        <Results movies={this.state.movies} onMovieClick={this.onMovieClick}/>
                        <section className="pages"  style={{'visibility':this.state.pagination_visibility}}>
                            <Pagination
                            
                                activePage={this.state.activePage}
                                boundaryRange={0}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={3}
                                totalPages={this.state.total_pages}
                                onPageChange ={this.onPageChange}
                            />
                        </section>
                    </React.Fragment>
                  
               
            </div>
        )
    }
}

export default App;