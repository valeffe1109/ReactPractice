import React, {Component} from "react"





class FilmList extends Component {
  state = {}
  render() {
    return (<div className="container">
      <div className="row">
         {this.props.movies && this.props.movies.map((movie,index) => <div className="col-md-3 my-5" key={index}> 
          <img src={movie.Poster} className="img-fluid" 
          onClick={()=>this.props.onMovieClicked(movie.imdbID)}></img>
        </div>)}
      </div>
    </div>);
  }
}

export default FilmList;