import React, { Component } from 'react';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import User from '../components/User/User';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state ={
            route:'home',
            searchfield :'',
            movies: [],
        }
    }


    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange =(event) =>{

        this.setState({searchfield:event.target.value});
    }

    render() {
        return (
            /*
            <User />
            <Input />
            <Results />
            */
            <div className=" container-fluid app">
                <div class="row">
                        <User />
                </div>
                <div class="row ">
                     <MovieSearch searchChange={this.onSearchChange}/>
                </div>
              
            </div>
        )
    }
}

export default App;
