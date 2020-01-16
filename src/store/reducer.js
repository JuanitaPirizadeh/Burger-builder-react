import * as actionTypes from './actions';

const initialState = {
    ingredients:{
        sallad: 0,
        facon: 0,
        greenbeef: 0,
        cheese: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    sallad: 5,
    cheese: 5,
    greenbeef: 10,
    facon: 5,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };  
            default:
                return state;   
    }
};

export default reducer;