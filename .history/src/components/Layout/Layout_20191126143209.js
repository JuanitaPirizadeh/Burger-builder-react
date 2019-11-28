import React from 'react';

import Aux from '../../hoc/'

const layout = (props) => (
    <div>
        Toolbar, Sidedrawer, Backdrop
        <main>
            {props.children}
        </main>
    </div>
);