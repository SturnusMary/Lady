import * as Actions from '../constants/actions'

const initStateLoginPage = {
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
}

export function loginPageReducer(state = initStateLoginPage, action){
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
        case Actions.IS_CHECKED: 
            return {
                ...state,
                viewCheckbox: !state.viewCheckbox
            }
    }

    if(state){
        return state;
    }
    
    return state;
}