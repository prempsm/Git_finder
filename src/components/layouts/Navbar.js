import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) =>{
   
   
        return (
            <nav className="ps-navbar">
                <h1>{title}</h1>
            </nav>
        );
   
};


Navbar.defaultProps={
    title:"I am psm."
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
}


export default Navbar
