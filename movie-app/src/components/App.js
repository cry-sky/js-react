import React from 'react';
import { moviesData } from "./moviesData";
import MovieItem from "./MovieItem";


class App extends React.Component {
	constructor(){
		super();

		this.state = {
			movies: moviesData,
			moviesWillWatch:[]

		};
		// this.removeMovie = this.removeMovie.bind(this);
	}

	removeMovie = movie => {
		const updateMovies = this.state.movies.filter(function(item) {
			return item.id !== movie.id;
		});
		this.setState({
			movies: updateMovies
		});
	}

addMovieToWillWatch = movie =>{
	const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

	this.setState({
		moviesWillWatch: updateMoviesWillWatch
	})
	
};

removeMovieFromWillWatch = movie => {
		const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
			return item.id !== movie.id;
		});
		this.setState({
			moviesWillWatch: updateMoviesWillWatch
		});
	};

	render(){
		return (
			<div className='container'>
			<div col-1>
				<div>
				{this.state.movies.map(movie => {
					return (<MovieItem 
						key={movie.id} 
						movie={movie} 
						removeMovie={this.removeMovie}
						addMovieToWillWatch={this.addMovieToWillWatch}
						removeMovieFromWillWatch={this.removeMovieFromWillWatch}
						/>
						);
				})}
				</div>
			</div>
				<div col-2>
					<h1>Movies: {this.state.moviesWillWatch.length}</h1>
					<ul>
						{this.state.moviesWillWatch.map(movie => (
							<li className="moviesWillWatch">
							<div>
								<span>{movie.title}</span> <span  style={{position:"absolute",bottom:"0",right:"0",backgroundColor:"rgba(0,200,0,.5)"}}>&hearts; {movie.vote_average}</span>
							</div>
							</li>
							))}
					</ul>
				</div>
			</div>
			)
		}
	}
export default App;
