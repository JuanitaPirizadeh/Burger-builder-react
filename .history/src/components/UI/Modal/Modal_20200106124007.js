import React from 'react';
import classes from './Modal.css';


const modal = (props) => (
    <div 
    className={classes.Modal}
    style
    >
        {props.children}
    </div>
);

export default modal; 