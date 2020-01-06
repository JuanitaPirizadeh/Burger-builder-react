import React from 'react'; 
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Burger Builder</NavigationItem>
        <NavigationItem></NavigationItem>
    </ul>
);

export default navigationItems; 