import React from 'react'; 
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key{{}}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    });
return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delisch burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
                <p>Continue to Checkout? </p>
        </Aux>
    );
};

export default orderSummary; 