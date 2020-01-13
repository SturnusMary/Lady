import React from 'react';
import PropTypes from 'prop-types';
import {Motto} from '../motto/motto';
import './loader.scss';

export function Loader (props) {
    const{isLoading} = props;
    
    return(
        <div className='wrapper-loader' style={{display: isLoading ? 'flex' : 'none'}} >
            <div className='loader-part'>
                <Motto isLoading={isLoading}/>
            </div>
        </div>
    )
}

Loader.propTypes = {
    isLoading: PropTypes.bool,
};