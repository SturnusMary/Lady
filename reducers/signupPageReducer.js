import * as Actions from '../constants/actions'

const initStateSignupPage = {
    inputEmailSignup: {
        value: '',
        valid: false,
    },
    inputPasswordSignup: {
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
}

export function signupPageReducer(state = initStateSignupPage, action){
    switch(action.type){
        case Actions.HIDE_VALUE: 
            return {
                ...state,
                valueHide: action.bool
            }
        case Actions.GET_INPUTDATA: 
            return {
                ...state,
                [action.name]: {
                    value: action.value,
                    valid: action.test,
                    },
            }
    }
    if(state){
        return state;
    }
    
    return state;
}