import React from 'react'; 
import

const button = (props) => (
    <button
    onClick={props.clicked}>{props.children}</button>
);

export default button; 