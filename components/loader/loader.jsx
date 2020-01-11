import React from 'react';
import PropTypes from 'prop-types';
import {Motto} from '../motto/motto';
import './loader.scss';

export class Loader extends React.Component {

    render(){
        const{isLoading} = this.props;
        return(
            <div className='wrapper-loader' 
                style={{
                    display: isLoading
                        ? 'flex'
                        : 'none'
                }} >
                <div className='loader-part'>
                    <Motto isLoading={isLoading}/>
                </div>
            </div>
        )
    }
}

Loader.propTypes = {
    isLoading: PropTypes.bool,
};