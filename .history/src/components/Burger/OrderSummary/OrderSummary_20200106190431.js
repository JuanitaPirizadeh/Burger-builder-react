import React, {Component} from 'react'; 
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    render(){
        return(<Aux>
            <h3>Your Order</h3>
            <p>A delisch burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
                <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout? </p>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
} = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    });
return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delisch burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
                <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout? </p>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary; 