import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({ icon, title}) => {
    Navbar.defaultProps = {
        title: 'github findersssss',
        icon: 'fab fa-github'

    };
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
   
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i>
                  {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>
        )
    }


export default Navbar
