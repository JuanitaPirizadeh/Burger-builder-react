import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar'

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
  </Aux>
);

export default layout; 