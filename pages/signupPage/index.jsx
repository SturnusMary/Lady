import React from 'react';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import 'regenerator-runtime/runtime';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {Header} from '../../components/headerPart/index';
import {Input} from '../../components/input/input';
import {Botton} from '../../components/botton/botton';
import {Social} from '../../components/social/social';
import {LoginLink} from '../../components/loginLink/loginLink';


export class SignupPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail2: {
                value: '',
                valid: false,
            },
            inputPassword1: {
                value: '',
                valid: false,
            },
            inputPasswordRep: {
                value: '',
                valid: false,
            },
            inputName: {
                value: '',
                valid: false,
            },
            inputUsername: {
                value: '',
                valid: false,
            },
            valueHide: true,
        }
        this.allValidated = false;
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickValueHide = this.onClickValueHide.bind(this);
    }
   
    async onInputChange(inputName, value, valid){
        await this.setState({
            [inputName]: {
              value,
              valid,
            },
        });   
    }

    onClickValueHide(valueHide){
        this.setState({
            valueHide,
        })
    }

    render(){
        const {valueHide, inputEmail2, inputPasswordRep, inputName, inputUsername, inputPassword1} = this.state;
        
        this.validated = false;
        if(inputPassword1.valid ){
            this.validated = inputPassword1.value;
        }
        
        if(inputName.valid && inputEmail2.valid && inputPasswordRep.valid && inputUsername.valid) {
            this.allValidated = true;
        }
       
        return (
            <React.Fragment>
                <ScrollToTop />
                <Header />
                <main className='signupPage-content'>
                    <form>
                        <Input 
                            name='inputName'
                            type='text'
                            onInputChange={this.onInputChange}
                            valid={inputName.valid}
                            value={inputName.value}
                            patern='^[A-Z][a-z]+ [A-Z][a-z]+$'
                        >Name</Input>
                        <Input 
                            name='inputUsername'
                            type='text'
                            onInputChange={this.onInputChange}
                            valid={inputUsername.valid}
                            value={inputUsername.value}
                            patern='^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$'
                        >Username</Input>
                        <Input 
                            name='inputEmail2'
                            type='email'
                            onInputChange={this.onInputChange}
                            valid={inputEmail2.valid}
                            value={inputEmail2.value}
                            onFocusHide={this.onFocusHide}
                            patern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        >E-mail</Input>
                        <Input 
                            name='inputPassword1'
                            type={valueHide ? 'password': 'text'}
                            onInputChange={this.onInputChange}
                            valid={inputPassword1.valid}
                            value={inputPassword1.value}
                            patern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
                            hide={this.onClickValueHide}
                        >Password</Input>
                        <Input 
                            name='inputPasswordRep'
                            type='password'
                            onInputChange={this.onInputChange}
                            valid={inputPasswordRep.valid}
                            value={inputPasswordRep.value}
                            patern={this.validated}
                        ></Input>
                    </form>
                    <p className='prompt'>Minimum 8 characters</p>
                    <Botton allValidated={this.allValidated}>Signup</Botton>
                    <Social></Social>
                    <LoginLink link='Login Now' to='/login'>Already have an account?</LoginLink>
                </main>
            </React.Fragment>
        )
    }
}

SignupPage.propTypes = {
};