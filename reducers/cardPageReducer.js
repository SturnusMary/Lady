import * as Actions from '../constants/actions';

const initState = {
    objCard: {},
    titleCardH: null,
    imgBackCard: null,
    saved: [],
}

export function cardPageReducer(state = initState, action){
    switch(action.type){
        case Actions.SET_OBJDATA:
            return {
                ...state,
                objCard: action.obj,
                titleCardH: action.title,
                imgBackCard: action.img,
            }
        case Actions.SAVE_GOODS:
            return {
                ...state,
                saved: [...action.goods]
            }
        default: 
        return state;
    }
}