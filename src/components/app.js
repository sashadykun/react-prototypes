import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';



export default () => {
    
    return (
    <div className="container">
        <Nav/>
        <Route  exact path="/" component={Welcome}/>
        <Route exact path="/our-macarons" component={OurMacarons}/>
        <Route exact path="/gifts-parties" component={GiftsParties}/>
        <Route exact path="/contact" component={Contact}/>
    </div>
);
}
