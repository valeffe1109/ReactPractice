import React from 'react';
import { async } from 'q';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: null };
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    {!this.state.movie && <h1>Loading</h1>}
                    {this.state.movie && (
                        <>
                            <div className="col-md-8">
                                <img src={this.state.movie.Poster} className="img-fluid" />

                            </div>
                            <div className="col-md-4">
                                {this.state.movie.Plot}
                            </div>
                        </>
                    )}
                </div>
            </div>);
    }

    componentDidMount = async() => {
        var response = await fetch("http://www.omdbapi.com/?apikey=e72e53d1&i=" + this.props.imdbID);
        var movie = await response.json();
        this.setState({ movie: movie });

     };
    componentDidUpdate = async prevProps => {
        if (prevProps.imdbID !== this.props.imdbID) {
            var response = await fetch("http://www.omdbapi.com/?apikey=e72e53d1&i=" + this.props.imdbID);
            var movie = await response.json();

            this.setState({ movie: movie });

        }
    };
}

export default MovieDetails;