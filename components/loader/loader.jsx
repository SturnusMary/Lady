import React from 'react';
import PropTypes from 'prop-types';
import Motto from '../motto/motto';
import './loader.scss';

function Loader(props) {
    return(
        <div className='wrapper-loader' style={{display: props.isLoading ? 'flex' : 'none'}} >
            <div className='loader-part'>
                <Motto isLoading={props.isLoading}/>
            </div>
        </div>
    )
}
export default Loader;

Loader.propTypes = {
    isLoading: PropTypes.bool,
};