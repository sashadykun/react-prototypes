import React from 'react';

export default props => {
    console.log('Props:', props);
    const {src, style} = props.about;
    return (
        <img src={src} style={style} className="scrapbook-image"/>
    )
} 