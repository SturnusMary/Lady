import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

export class Checkbox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const{name, children} = this.props;
        return(
            <div className='checkbox-template'>
                <input type='checkbox' name={name} id={name} name='Login'></input>
                <label htmlFor={name}>{children}</label>
            </div>
        )
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
};

