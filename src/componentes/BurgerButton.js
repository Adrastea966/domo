//Burger Button
import React from 'react';
import '../App.css';

function BurgerButton(props) {

    return (
        <div onClick={props.handleClick} className={`burger ${props.clicked ? 'menu-open' : ''}`}>
            <svg className="vbp-header-menu-button__svg">
                <line x1="0" y1="50%" x2="100%" y2="50%" className="top" shape-rendering="crispEdges" />
                <line x1="0" y1="50%" x2="100%" y2="50%" className="middle" shape-rendering="crispEdges" />
                <line x1="0" y1="50%" x2="100%" y2="50%" className="bottom" shape-rendering="crispEdges" />
            </svg>
        </div>
    );
}

export default BurgerButton;