import * as Actions from '../constants/actions'

const initState = {
    activeBtn: 'start',
}

export function headerReducer(state = initState, action) {
    switch(action.type){
        case Actions.IS_ACTIVEBTN: 
            return {
                ...state,
                activeBtn: action.bool
            }
        default: 
        return state;
    }
}