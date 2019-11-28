import React from 'react';

const layout = (props) => (
    <div>
        Toolbar, Sidedrawer, Backdrop
        <main>
            {props.children}
        </main>
    </div>
);