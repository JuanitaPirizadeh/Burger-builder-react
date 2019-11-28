import React from 'react';
import classes from './BuildControls';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControls key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls; 