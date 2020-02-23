import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {HeaderNav} from './headerNav/index';
import './stylesheet.scss';

class Header extends React.Component {
    componentDidMount(){
        this.props.isActiveBtm('start');
    }

    handlerClick = () => {
        const {activeBtn} = this.props;
        if(activeBtn === 'start'){
           this.props.isActiveBtm(true)
        }
        const currentStateBtn = activeBtn;
        this.props.isActiveBtm(!currentStateBtn);
    }

    render(){
        const{title, activeBtn} = this.props;
        return (
            <React.Fragment>
                <header>
                    <div className='wrapper-header'>
                        <NavLink aria-label="home page" to='/'><div className='logo'>Lady</div></NavLink>
                        <NavLink aria-label={`${title} page`} to={`/${title ? title.toLowerCase() : null}`}><span>{title}</span></NavLink>
                        <button aria-label="menu" className={activeBtn === 'start' ? 'menu-btn' : !activeBtn ? 'menu-btn menu-btn_active' : 'menu-btn'} onClick={this.handlerClick}>
                            <span></span>
                        </button>
                    </div>
                    <HeaderNav active={activeBtn} />
                </header>
            </React.Fragment>
        )
    }
}

const mapStateToPropsHeader = (state) => {
    return {
        activeBtn: state.headerR.activeBtn,
    }
}

const mapDispatchToPropsHeader = (dispatch) => {
    return {
        isActiveBtm: (value) => dispatch(Actions.isActiveBtm(value))
    }
}

export default connect(mapStateToPropsHeader, mapDispatchToPropsHeader)(Header);

Header.propTypes = {
    activeBtn: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
};