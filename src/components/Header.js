import React from 'react';
import Proptypes from 'prop-types';

const Header = (props) => {
    return (
        <nav className="nav-extended card-panel blue lighten-3">
            <div className="nav-wrapper center-align">
                <h3 className="center-align ">{props.titulo}</h3>
            </div>
        </nav>
        
    )
}

Header.propTypes = {
    titulo : Proptypes.string.isRequired
}
export default Header