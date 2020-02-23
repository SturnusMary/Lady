import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions';

class Checkbox extends React.Component {
    render(){
        const{name, children} = this.props;
        return(
            <div className='checkbox-template'>
                <input type='checkbox' name={name} id={name} onClick={this.props.isChecked} name='Login'></input>
                <label htmlFor={name}>{children}</label>
            </div>
        )
    }
}

const mapStateToPropsCheckbox = (state) => {
    return {
        viewCheckbox: state.loginPageR.viewCheckbox,
    }
}

const mapDispatchToPropsCheckbox= (dispatch) => {
    return {
        isChecked: (value) => dispatch(Actions.isChecked(value)),
    }
}

export default connect(mapStateToPropsCheckbox, mapDispatchToPropsCheckbox)(Checkbox);

Checkbox.propTypes = {
    viewCheckbox: PropTypes.bool,
    isChecked: PropTypes.func,
};