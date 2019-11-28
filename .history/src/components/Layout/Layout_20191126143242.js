import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
    
    <div>
        Toolbar, Sidedrawer, Backdrop
        <main>
            {props.children}
        </main>
    </div>
);