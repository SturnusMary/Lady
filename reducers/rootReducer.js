import * as Actions from '../constants/actions';

const initStateRoot = {
    width: window.innerWidth,
    isLoading: true,
}

export function rootReducer(state = initStateRoot, action) {
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
    }

    if(state){
        return state;
    }

    return state;
}