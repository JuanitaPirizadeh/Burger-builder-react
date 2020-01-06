import React from 'react';
import classes from './Modal.css';


const modal = (props) => (
    <div 
    className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : trans
    }}
    >
        {props.children}
    </div>
);

export default modal; 