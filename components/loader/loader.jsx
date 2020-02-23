import React from 'react';
import PropTypes from 'prop-types';
import Motto from '../motto/motto';
import './loader.scss';

function Loader({isLoading}) {
    return(
        <div className='wrapper-loader' style={{display: isLoading ? 'flex' : 'none'}} >
            <div className='loader-part'>
                <Motto isLoading={isLoading}/>
            </div>
        </div>
    )
}
export default Loader;

Loader.propTypes = {
    isLoading: PropTypes.bool,
};