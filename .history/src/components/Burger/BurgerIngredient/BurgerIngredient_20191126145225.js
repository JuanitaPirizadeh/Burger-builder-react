import React from 'react';

const burgerIngredient = (props) => {
    let ingridient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingridient = <div className={classes.BreadBottom}></div>;
            break;

            case ('bread-top'):
                ingridient = (
                    <div className={classes.BreadTop}>
                       <div className={} 
                    </div>
                )
    }
};

export default burgerIngredient; 

