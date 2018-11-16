import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';

export default () => {
    
    return (
    <div className="container">
        <h1>This is ROUTING!</h1>
        <Route path="/" component={Welcome}/>
    </div>
);
}
