import React from "react";

class MovieItem extends React.Component{
  constructor(){
    super();

    this.state = {
      willWatch: false
    };

  }   

  render(){
      const{ movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
      return(
        <div className="card" style={{margin:"20px", boxShadow:"2px 1px 3px rgba(0,0,0,.1)",position:"relative" }}>
        <div className="card-img"><img style={{width: "100%"}} className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
          movie.poster_path}`}
          alt='' /></div>
          <div className="card-body"  style={{paddingLeft:"15px"}}>
          <h2 className="card-title">{movie.title}</h2>
          <div>
          <p>Rating: {movie.vote_average}</p>
          {this.state.willWatch ? 
               <button type="button" onClick={() => {
                this.setState({
                  willWatch: false
                })
                removeMovieFromWillWatch(movie);
              }}
          style={{position:"absolute",bottom:"0",right:"0",border:"solid 1px transparent",padding:"5px",backgroundColor:"rgba(255,100,0,.5)"}}>
          Remove Will Watch
          </button> :
          <button type="button" onClick={() => {
            this.setState({
              willWatch: true
            });
            addMovieToWillWatch(movie);
          }}
          style={{position:"absolute",bottom:"0",right:"0",border:"solid 1px transparent",padding:"5px",backgroundColor:"rgba(0,200,0,.5)"}}>
          Add Will Watch
          </button>
          }
          
          </div>
          <button type="button" style={{
            position:"absolute",top:"0",right:"0",backgroundColor:"rgba(255,0,0,.5)",border:"solid 1px transparent" 
          }} onClick={removeMovie.bind(null, movie)}>
          X
          </button>
          </div>
          </div>
          );
    }
  }


export default MovieItem;
