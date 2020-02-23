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

class LoginPage extends React.Component {
    render(){
        this.allValidated = false;
        const {inputEmailLogin, inputPasswordLogin, valueHide} = this.props;

        if(inputEmailLogin.valid && inputPasswordLogin.valid){
            this.allValidated = true;
        }

        return (
            <React.Fragment>
                <ScrollToTop />
                <Header />
                <main className='startPage-content'>
                    <Motto />
                    <form>
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
                    </form>
                    <Botton allValidated={this.allValidated}>Login</Botton>
                    <Social></Social>
                    <LoginLink link='Signup' to='/signup'>New user?</LoginLink>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToPropsLoginPage = (state) => {
    return {
        valueHide: state.loginPageR.valueHide,
        inputEmailLogin: state.loginPageR.inputEmailLogin,
        inputPasswordLogin: state.loginPageR.inputPasswordLogin,
    }
}

export default connect(mapStateToPropsLoginPage)(LoginPage);

LoginPage.propTypes = {
    valueHide: PropTypes.bool,
    inputEmailLogin: PropTypes.object,
    inputPasswordLogin: PropTypes.object,
};