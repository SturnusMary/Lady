import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions';

class Checkbox extends React.Component {
    render(){
        const{name, children, isChecked} = this.props;
        return(
            <div className='checkbox-template'>
                <input type='checkbox' name={name} id={name} onClick={isChecked} name='Login'></input>
                <label htmlFor={name}>{children}</label>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        isChecked: (value) => dispatch(Actions.isChecked(value)),
    }
}
export default connect(null, mapDispatchToProps)(Checkbox);

Checkbox.propTypes = {
    isChecked: PropTypes.func,
};