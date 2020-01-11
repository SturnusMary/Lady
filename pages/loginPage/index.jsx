import React from 'react';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import {Header} from '../../components/headerPart/index';
import {Input} from '../../components/input/input';
import {Checkbox} from '../../components/checkbox/checkbox';
import {Botton} from '../../components/botton/botton';
import {Social} from '../../components/social/social';
import {LoginLink} from '../../components/loginLink/loginLink';
import {Motto} from '../../components/motto/motto';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';

export class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail: {
                value: '',
                valid: false,
            },
            inputPassword: {
                value: '',
                valid: false,
            },
            valueHide: true,
        }
        this.allValidated = false;
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickValueHide = this.onClickValueHide.bind(this);
    }

    onInputChange(inputName, value, valid){
        this.setState({
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
        //console.log(this.state);
        const {inputEmail, valueHide, inputPassword} = this.state;
        const {isLoading, scroll} = this.props;
        
        if(inputEmail.valid && inputPassword.valid){
            this.allValidated = true;
        }
        
        return (
            <React.Fragment>
                <ScrollToTop />
                <Header scroll={scroll}/>
                <main className='startPage-content' style={{display: isLoading ? 'none': 'flex'}}>
                    <Motto />
                    <form>
                        <Input 
                            name='inputEmail'
                            type='email'
                            onInputChange={this.onInputChange}
                            valid={inputEmail.valid}
                            value={inputEmail.value}
                            onFocusHide={this.onFocusHide}
                            patern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        >E-mail</Input>
                        <Input 
                            name='inputPassword'
                            type={valueHide ? 'password': 'text'}
                            onInputChange={this.onInputChange}
                            valid={inputPassword.valid}
                            value={inputPassword.value}
                            patern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
                            hide={this.onClickValueHide}
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

LoginPage.propTypes = {
    scroll: PropTypes.bool,
};