import * as Actions from '../constants/actions'

const initStateHeader = {
    activeBtn: 'start',
}

export function headerReducer(state = initStateHeader, action) {
    switch(action.type){
        case Actions.IS_ACTIVEBTN: 
            return {
                ...state,
                activeBtn: action.bool
            }
    }

    if(state){
        return state;
    }
    
    return state;
}