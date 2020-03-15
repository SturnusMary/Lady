import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import Header from '../../components/headerPart/index';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import {Botton} from '../../components/botton/botton';
import {Social} from '../../components/social/social';
import {LoginLink} from '../../components/loginLink/loginLink';
import Motto from '../../components/motto/motto';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import * as Actions from '../../actions/actions';
import {Redirect} from 'react-router-dom';

class LoginPage extends React.Component {
    handleSubmit = (e) => {
        const{signIn, inputEmailLogin, inputPasswordLogin} = this.props;
        e.preventDefault();
        signIn({email: inputEmailLogin.value, password: inputPasswordLogin.value});
    }
 
    render(){
        this.allValidated = false;
        const {inputEmailLogin, inputPasswordLogin, valueHide, authError, auth} = this.props;

        if(inputEmailLogin.valid && inputPasswordLogin.valid){
            this.allValidated = true;
        }
        
        if(auth.uid) return <Redirect to='/' />
        return (
            <React.Fragment>
                <ScrollToTop />
                <Header />
                <main className='startPage-content'>
                    <Motto />
                    <form onSubmit={this.handleSubmit}>
                        {authError ? <p className='signInError'>The email or password you entered is incorrect. Please go to <span> Forgot Password </span> page.</p> : null}
                        <Input 
                            name='inputEmailLogin'
                            type='email'
                            valid={inputEmailLogin.valid}
                            value={inputEmailLogin.value}
                            onFocusHide={this.onFocusHide}
                            patern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        >E-mail</Input>
                        <Input 
                            name='inputPasswordLogin'
                            type={valueHide ? 'password': 'text'}
                            valid={inputPasswordLogin.valid}
                            value={inputPasswordLogin.value}
                            patern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
                        >Password</Input>
                        <div className='checkboxBlock'>
                            <Checkbox name='checkboxLogin'>Remember me</Checkbox>
                            <a href='#'>Forgot your password ?</a>
                        </div>
                        
                        <Botton allValidated={this.allValidated}>Login</Botton>
                    </form>
                    <Social></Social>
                    <LoginLink link='Signup' to='/signup'>New user?</LoginLink>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        valueHide: state.loginPageR.valueHide,
        inputEmailLogin: state.loginPageR.inputEmailLogin,
        inputPasswordLogin: state.loginPageR.inputPasswordLogin,
        authError: state.loginPageR.authError,
        auth: state.firebaseR.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(Actions.signIn(creds)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
    valueHide: PropTypes.bool,
    inputEmailLogin: PropTypes.object,
    inputPasswordLogin: PropTypes.object,
    auth: PropTypes.object,
    authError: PropTypes.string,
    signIn: PropTypes.func
};