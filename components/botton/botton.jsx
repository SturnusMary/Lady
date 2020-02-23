import React from 'react';
import PropTypes from 'prop-types';
import './botton.scss';

export class Botton extends React.Component {
    render(){
        const{children, allValidated} = this.props;
        return(
            <div className='button-template'>
                <button disabled={!allValidated}>{children}</button>
            </div>
        )
    }
}

Botton.propTypes = {
    children: PropTypes.string,
    allValidated: PropTypes.bool,
};