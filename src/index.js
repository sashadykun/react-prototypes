import React from 'react';
import ReactDOM from 'react-dom';

const userObject = {
    'name': "Sasha ",
    'luckyNumber': luckyNumber()
};
ReactDOM.render(
    greeting(userObject),
    document.getElementById('root')
)



function luckyNumber() {
    return Math.floor(Math.random() * 1000) +1;
};
console.log(userObject.luckyNumber);
function greeting(user){
    return <div className="container">
    <h1 className="text-muted">Welcome {user.name} !</h1>
    <h2 className="text-muted">Your lucky number is: {user.luckyNumber} !!!</h2>
    </div>
};
