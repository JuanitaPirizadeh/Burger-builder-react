import React from 'react';
import classes from './BuildControls'
import BuildControl from './'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>

    </div>
);

export default buildControls; 