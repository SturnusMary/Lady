import * as Actions from '../constants/actions'

const initState = {
    inputEmailLogin: {
        value: '',
        valid: false,
    },
    inputPasswordLogin: {
        value: '',
        valid: false,
    },
    valueHide: true,
    viewCheckbox: false,
    loginData: {},
    authError: null
}

export function loginPageReducer(state = initState, action){
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
        case Actions.IS_CHECKED: 
            return {
                ...state,
                viewCheckbox: !state.viewCheckbox
            }
        case Actions.LOGIN_ERROR:
            return {
                ...state,
                authError: 'Login failed'
            }
        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case Actions.SIGNOUT_SUCCESS: 
            return state;
        default: 
        return state;
    }
}