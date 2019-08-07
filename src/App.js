import React , {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList';
import MovieDetails from './MovieDetails'

class App extends Component {
  constructor(props){

    super(props);
   this.state= {movies:[], selectMovie:null }
  }
  
  render() {
    return (
      

       <div>
         {this.state.movies &&
       <FilmList movies={this.state.movies}
       onMovieClicked={(imdbID)=> this.setState({selectMovie:imdbID})}/>
    

       }



     {this.state.selectMovie &&
     <MovieDetails imdbID={this.state.selectMovie}/>}
       
       </div>

  

    )

  }
        
        
        
  componentDidMount = async () => {
    var result = await fetch ("http://www.omdbapi.com/?apikey=e72e53d1&s=Avengers");
           var json = await result.json();
        
   this.setState({

              movies: json.Search
           });
        
           
        
          }
        
        
        
        }
        
        
        
        export default App;
