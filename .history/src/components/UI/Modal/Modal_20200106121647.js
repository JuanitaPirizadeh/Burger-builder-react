import React from 'react';
import classes from './Modal.css';


const modal = (props) => (
    <div className={classes}>
        {props.children}
    </div>
);

export default modal; 