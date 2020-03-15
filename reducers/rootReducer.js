import * as Actions from '../constants/actions';

const initState = {
    width: window.innerWidth,
    isLoading: true,
}

export function rootReducer(state = initState, action) {
    switch(action.type){
        case Actions.SET_WIDTH:
            return {
                ...state,
                width: action.innerWidth
            }
        case Actions.IS_PRELOADER:
            return {
                ...state,
                isLoading: action.bool
            }
        default: 
        return state;
    }
}