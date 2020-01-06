import React from 'react'; 
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li><span>{igKey}</span>{igKey}: {props.ingredients</li>
    })

        <Aux>
            <h3>Your Order</h3>
            <p>A delisch burger with the following ingredients: </p>
            <ul>

            </ul>
        </Aux>
    );
};

export default orderSummary; 