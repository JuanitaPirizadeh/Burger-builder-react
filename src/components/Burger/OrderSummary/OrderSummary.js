import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Din beställning!</h3>
                <p>En skräddarsydd burgare med följande ingredienser:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total pris i bitcoins: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Ser det rätt ut?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>AVBRYT</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>GÅ VIDARE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;