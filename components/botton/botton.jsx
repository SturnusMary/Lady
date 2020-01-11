import React from 'react';
import PropTypes from 'prop-types';
import './botton.scss';

export class Botton extends React.Component {
    constructor(props){
        super(props);
    }
    onClick(){

    }
    render(){
        const{children, allValidated} = this.props;
        return(
            <div className='button-template'>
                <button disabled={!allValidated}  onClick={this.onClick}  >{children}</button>
            </div>
        )
    }
}

Botton.propTypes = {
    children: PropTypes.string,
    allValidated: PropTypes.bool,
};