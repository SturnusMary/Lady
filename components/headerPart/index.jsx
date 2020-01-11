import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {HeaderNav} from './headerNav/index'
import './stylesheet.scss';

export class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            activeBtn: 'start',
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(){
        if(this.state.activeBtn === 'start'){
            this.setState({
                activeBtn: true,
            })
        }
        
        const currentStateBtn = this.state.activeBtn;
        this.setState({
            activeBtn: !currentStateBtn,
        })
    }

    render(){
        const{activeBtn} = this.state;
        const{scroll} = this.props;
        return (
            <React.Fragment>
                <header style={{background: scroll ? 'rgba(255, 255, 255, 0.859)' : 'white'}}>
                    <div className='wrapper-header'>
                        <NavLink to='/'><div className='logo'>Lady</div></NavLink>
                        <button className={activeBtn === 'start' ? 'menu-btn' : !activeBtn ? 'menu-btn menu-btn_active' : 'menu-btn'} onClick={this.handlerClick}>
                            <span></span>
                        </button>
                    </div>
                    <HeaderNav active={activeBtn} />
                </header>
            </React.Fragment>
        )
    }
}

Header.propTypes = {
    scroll: PropTypes.bool,
};