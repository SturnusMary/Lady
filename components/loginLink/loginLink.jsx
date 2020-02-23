import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './loginLink.scss';

export class LoginLink extends React.Component {
    render(){
        const{children, link, to} = this.props;
        return(
            <div className='loginSignup-template'>
                <p>{children}</p>
                <NavLink to={to}>{link}</NavLink>
            </div>
        )
    }
}

LoginLink.propTypes = {
    children: PropTypes.string,
    link: PropTypes.string,
    to: PropTypes.string,
};