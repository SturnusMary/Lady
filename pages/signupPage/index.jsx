import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import Header from '../../components/headerPart/index';
import Input from '../../components/input/input';
import {Botton} from '../../components/botton/botton';
import {Social} from '../../components/social/social';
import {LoginLink} from '../../components/loginLink/loginLink';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {Redirect} from 'react-router-dom';
import * as Actions from '../../actions/actions';

class SignupPage extends React.Component {
    handleSubmit = (e) => {
        const {inputName, inputUsername, inputEmailSignup, inputPasswordSignup, signUp} = this.props;
        e.preventDefault();
        signUp({name: inputName.value, username: inputUsername.value, email: inputEmailSignup.value, password: inputPasswordSignup.value});
    }

    render(){
        const {inputEmailSignup, inputPasswordRep, inputName, inputUsername, inputPasswordSignup, valueHide, auth, authError} = this.props;
        this.allValidated = false;
        this.validated = false;
        if(inputPasswordSignup.valid){
            this.validated = inputPasswordSignup.value;
        }
        
        if(inputName.valid && inputEmailSignup.valid && inputPasswordRep.valid && inputUsername.valid) {
            this.allValidated = true;
        }
        
        if(auth.uid) return <Redirect to='/' />
        return (
            <React.Fragment>
                <ScrollToTop />
                <Header />
                <main className='signupPage-content'>
                    <form onSubmit={this.handleSubmit}>
                    {authError ? <p className='signInError'>{authError}</p> : null}
                        <Input 
                            name='inputName'
                            type='text'
                            valid={inputName.valid}
                            value={inputName.value}
                            patern='^[A-Z][a-z]+ [A-Z][a-z]+$'
                        >Name</Input>
                        <Input 
                            name='inputUsername'
                            type='text'
                            valid={inputUsername.valid}
                            value={inputUsername.value}
                            patern='^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$'
                        >Username</Input>
                        <Input 
                            name='inputEmailSignup'
                            type='email'
                            valid={inputEmailSignup.valid}
                            value={inputEmailSignup.value}
                            onFocusHide={this.onFocusHide}
                            patern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        >E-mail</Input>
                        <Input 
                            name='inputPasswordSignup'
                            type={valueHide ? 'password': 'text'}
                            valid={inputPasswordSignup.valid}
                            value={inputPasswordSignup.value}
                            patern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
                        >Password</Input>
                        <Input 
                            name='inputPasswordRep'
                            type='password'
                            valid={inputPasswordRep.valid}
                            value={inputPasswordRep.value}
                            patern={this.validated}
                        ></Input>
                        <p className='prompt'>Minimum 8 characters</p>
                        <Botton allValidated={this.allValidated}>Signup</Botton>
                    </form>
                    <Social></Social>
                    <LoginLink link='Login Now' to='/login'>Already have an account?</LoginLink>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        valueHide: state.loginPageR.valueHide,
        inputEmailSignup: state.signupPageR.inputEmailSignup,
        inputPasswordSignup: state.signupPageR.inputPasswordSignup,
        inputPasswordRep: state.signupPageR.inputPasswordRep,
        inputName: state.signupPageR.inputName,
        inputUsername: state.signupPageR.inputUsername,
        auth: state.firebaseR.auth,
        authError: state.signupPageR.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(Actions.signUp(newUser)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

SignupPage.propTypes = {
    valueHide: PropTypes.bool,
    inputEmailSignup: PropTypes.object,
    inputPasswordSignup: PropTypes.object,
    inputPasswordRep: PropTypes.object,
    inputName: PropTypes.object,
    inputUsername: PropTypes.object,
    auth: PropTypes.object,
    authError: PropTypes.string,
    signUp: PropTypes.func
};