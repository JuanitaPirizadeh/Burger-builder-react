import React from 'react'; 
import classes from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem}><a href={props.link}>A Ling </a></li>
);

export default navigationItem; 