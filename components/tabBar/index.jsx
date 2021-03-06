import React from 'react';
import {NavLink} from 'react-router-dom';
import './stylesheet.scss';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/actions';
import {connect} from 'react-redux';

class TabBar extends React.Component {
    render(){
        const{auth, saved} = this.props;
        let user = saved && saved.find(el => el.id === auth.uid);
     
        return (
            <React.Fragment>
                <footer>
                    <div className='wrapper-footer'>
                        <nav id='navBar'>
                            <ul className='navBar-content'>
                                <li  className='navBar-content__icon'>
                                    <NavLink exact to='/'>
                                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" >
                                            <path fillRule="evenodd" d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z" />
                                        </svg>
                                    </NavLink>
                                </li>
                                <li className='navBar-content__icon'>
                                    <NavLink to={!auth.uid ? '/login' : '/favorites'}>
                                        <div className='number' style={{display: !auth.uid ? 'none' : user && !user.user.length ? 'none' : 'flex'}}>{user && user.user.length}</div>
                                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"  d="M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z"/>
                                        </svg>
                                    </NavLink>
                                </li>
                                <li  className='navBar-content__icon'>
                                    <NavLink to={!auth.uid ? '/login' : '/g'}>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none">
                                            <path fillRule="evenodd" d="M23.4558 20.5187L23.4583 20.542L23.4629 20.565C23.4867 20.6823 23.5 20.796 23.5 20.9091C23.5 21.8094 22.8081 22.5 22 22.5H12H2C1.19186 22.5 0.5 21.8094 0.5 20.9091C0.5 20.796 0.513314 20.6823 0.537055 20.565L0.541717 20.542L0.544199 20.5187L2.4972 2.14375L2.5 2.11741V2.09091C2.5 1.19065 3.19186 0.5 4 0.5H12H20C20.8081 0.5 21.5 1.19065 21.5 2.09091V2.11741L21.5028 2.14375L23.4558 20.5187ZM17.5 6.27273V5.44368C18.1009 5.08516 18.5 4.41815 18.5 3.65909C18.5 2.53849 17.6249 1.59091 16.5 1.59091C15.3751 1.59091 14.5 2.53849 14.5 3.65909V6.27273C14.5 7.74695 13.3571 8.90909 12 8.90909C10.6429 8.90909 9.5 7.74695 9.5 6.27273V3.65909C9.5 2.53849 8.62486 1.59091 7.5 1.59091C6.37514 1.59091 5.5 2.53849 5.5 3.65909C5.5 4.41815 5.89908 5.08516 6.5 5.44368V6.27273C6.5 9.41001 8.94614 12 12 12C15.0539 12 17.5 9.41001 17.5 6.27273Z"/>
                                        </svg>
                                    </NavLink>
                                </li>
                                <li className='navBar-content__icon'>
                                    <NavLink to={!auth.uid ? '/login' : '/account'}>
                                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className='onlyStroke'>
                                            <path fillRule="evenodd" d="M11.1408 25L11.1408 24.5H11.1408L11.1408 25ZM1 19.5577L0.500057 19.5502L0.497722 19.705L0.583336 19.8341L1 19.5577ZM21.2817 19.5577L21.6984 19.8341L21.784 19.705L21.7816 19.5502L21.2817 19.5577ZM11.1408 1.5C13.6703 1.5 15.7113 3.54093 15.7113 6.07042H16.7113C16.7113 2.98865 14.2226 0.5 11.1408 0.5V1.5ZM15.7113 6.07042C15.7113 8.59991 13.6703 10.6408 11.1408 10.6408V11.6408C14.2226 11.6408 16.7113 9.1522 16.7113 6.07042H15.7113ZM11.1408 10.6408C8.61134 10.6408 6.57041 8.59991 6.57041 6.07042H5.57041C5.57041 9.1522 8.05906 11.6408 11.1408 11.6408V10.6408ZM6.57041 6.07042C6.57041 3.54093 8.61134 1.5 11.1408 1.5V0.5C8.05906 0.5 5.57041 2.98865 5.57041 6.07042H6.57041ZM11.1408 24.5C7.22971 24.5 3.57865 22.5406 1.41666 19.2813L0.583336 19.8341C2.9306 23.3727 6.89454 25.5 11.1408 25.5L11.1408 24.5ZM1.49994 19.5653C1.50991 18.904 1.84489 18.2784 2.47245 17.6902C3.10211 17.1002 3.99222 16.5826 5.01476 16.1549C7.06188 15.2987 9.51897 14.8521 11.1408 14.8521V13.8521C9.38244 13.8521 6.79445 14.3266 4.6289 15.2324C3.5451 15.6857 2.53697 16.2593 1.78865 16.9606C1.0382 17.6638 0.51544 18.5297 0.500057 19.5502L1.49994 19.5653ZM11.1408 14.8521C12.7541 14.8521 15.2113 15.2986 17.2608 16.155C18.2845 16.5827 19.1762 17.1004 19.8072 17.6906C20.4362 18.2789 20.7718 18.9045 20.7817 19.5653L21.7816 19.5502C21.7662 18.5293 21.242 17.6633 20.4903 16.9603C19.7407 16.2591 18.731 15.6855 17.6463 15.2323C15.4789 14.3267 12.891 13.8521 11.1408 13.8521V14.8521ZM20.865 19.2813C18.703 22.5406 15.052 24.5 11.1408 24.5L11.1408 25.5C15.3872 25.5 19.3511 23.3727 21.6984 19.8341L20.865 19.2813Z"/>
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

const mapStateToProps= (state) => {
    return {
        auth: state.firebaseR.auth,
        saved: state.firestoreR.ordered.saved,
    }
}

export default connect(mapStateToProps)(TabBar);

TabBar.propTypes = {
    auth: PropTypes.object,
};