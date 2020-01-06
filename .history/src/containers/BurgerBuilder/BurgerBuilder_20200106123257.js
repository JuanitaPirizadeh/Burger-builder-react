import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 

const INGREDIENT_PRICES = {
    sallad: 0.5,
    cheese: 0.5,
    greenbeef: 1.5,
    facon: 0.7,
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            sallad: 0,
            cheese: 0,
            greenbeef: 0,
            facon: 0,
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState(ingredients) {
       
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) =>{
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; 
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type]; 
            if (oldCount <= 0) {
                return; 
            }
            const updatedCount = oldCount - 1; 
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount; 
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
            this.updatePurchaseState(updatedIngredients);
    }

    render(){ 
        const disabledInfo = {
                ...this.state.ingredients
            };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0
            }
        return(
           
<Aux>
    <Modal>
        <OrderSummary ingredients={} />
        </Modal> 
    <Burger ingredients={this.state.ingredients} />
    <BuildControls 
    ingredientAdded={this.addIngredientHandler} 
    ingredientRemoved={this.removeIngredientHandler} 
    disabled={disabledInfo}
    purchasable={this.state.purchaseable}
    price={this.state.totalPrice} />
</Aux>
        );
    }
}

export default BurgerBuilder;