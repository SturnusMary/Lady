import * as Actions from '../constants/actions';

const initStateList = {
    newList: [],
    saleList: [],
}

export function hScrollingReducer(state = initStateList, action) {
    switch(action.type){
        case Actions.SET_LIST:
            return {
                ...state,
                [`${action.label.toLowerCase()}List`]: action.array
            }
    }

    if(state){
        return state;
    }

    return state;
}