import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
    <div></div>
        <div>Toolbar, Sidedrawer, Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
  
);

export default layout; 