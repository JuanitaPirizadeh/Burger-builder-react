import React from 'react'; 
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Bygg burgare</NavigationItem>
        {props.isAuthenticated ?
        <NavigationItem link="/orders">Ordrar</NavigationItem> : null}
        {!props.isAuthenticated 
        ? <NavigationItem link="/auth">Logga in</NavigationItem>
        : <NavigationItem link="/logout">Logga ut</NavigationItem>}
    </ul>
);

export default navigationItems; 