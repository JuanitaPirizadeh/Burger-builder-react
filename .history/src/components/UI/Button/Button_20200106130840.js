import React from 'react'; 
import classes from './'

const button = (props) => (
    <button
    onClick={props.clicked}>{props.children}</button>
);

export default button; 