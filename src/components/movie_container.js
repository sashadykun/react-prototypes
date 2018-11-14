import React, {Component} from 'react';
import Movie from './movies';
import Axios from 'axios';

class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
        Axios.get(url).then((response)=>{
            this.setState({
                movies: response.data.feed.entry 
            })
            console.log('The rezult:', response);
        });
    }
    render(){
        console.log('This.state', this.state);
        const movieList = this.state.movies.map((movieInfoItem, index) =>{
            return <Movie info={movieInfoItem} key={index}/>
        })
        return (
            <div>
                {movieList}
            </div>
        )
    }
}
export default MoviesContainer;