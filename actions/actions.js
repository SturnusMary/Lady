import * as Actions from '../constants/actions';

export function setWidth(innerWidth) {
    return {type: Actions.SET_WIDTH, innerWidth,}
}

export function isPreloader(bool) {
    return {type: Actions.IS_PRELOADER, bool}
}

export function setList(array, label) {
    return {type: Actions.SET_LIST, array, label}
}

export function setObjData(obj, title, img) {
    return {type: Actions.SET_OBJDATA, obj, title, img}
}

export function isActiveBtm(bool) {
    return {type: Actions.IS_ACTIVEBTN, bool}
}

export function hideValue(bool) {
    return {type: Actions.HIDE_VALUE, bool}
}

export function getInputData(name, value, test) {
    return {type: Actions.GET_INPUTDATA, name, value, test}
}

export function isChecked(bool) {
    return {type: Actions.IS_CHECKED, bool}
}