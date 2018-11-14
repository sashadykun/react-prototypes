import React from 'react';
import MoviesComponent from './movie_container'
import axios from 'axios';

export default () => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MoviesComponent/>
        </div>
    )
}

