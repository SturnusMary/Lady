import * as Actions from '../constants/actions'

const initState = {
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
    authError: null
}

export function signupPageReducer(state = initState, action){
    switch(action.type){
        case Actions.HIDE_VALUE: 
            return {
                ...state,
                valueHide: action.bool
            }
        case Actions.GET_INPUTDATA: 
            return {
                ...state,
                authError: null,
                [action.name]: {
                    value: action.value,
                    valid: action.test,
                    },
            }
        case Actions.SIGNUP_ERROR: 
            return {
                ...state,
                authError: action.err.message
            }
        case Actions.SIGNUP_SUCCESS: 
            return {
                ...state,
                authError: null
            }
        default: 
        return state;
    }
}