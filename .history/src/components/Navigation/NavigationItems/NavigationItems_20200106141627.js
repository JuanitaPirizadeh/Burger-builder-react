import React from 'react'; 
import classes from './NavigationItems.css'
import NavigationItem from '.'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <li><a href="/">A Link</a></li>
    </ul>
);

export default navigationItems; 