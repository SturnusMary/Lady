import * as Actions from '../constants/actions';

const initStateCardPage = {
    objCard: {},
    titleCardH: null,
    imgBackCard: null,
}

export function cardPageReducer(state = initStateCardPage, action){
    switch(action.type){
        case Actions.SET_OBJDATA:
            return {
                ...state,
                objCard: action.obj,
                titleCardH: action.title,
                imgBackCard: action.img,
            }
    }

    if(state){
        return state;
    }

    return state;
}
