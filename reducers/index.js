import {combineReducers} from 'redux';
import {rootReducer} from './rootReducer';
import {hScrollingReducer} from './hScrollingReducer';
import {cardPageReducer} from './cardPageReducer';
import {headerReducer} from './headerReducer';
import {loginPageReducer} from './loginPageReducer';
import {signupPageReducer} from './signupPageReducer';

export default combineReducers({
    rootR: rootReducer,
    hScrollingR: hScrollingReducer,
    cardPageR: cardPageReducer,
    headerR: headerReducer,
    loginPageR: loginPageReducer,
    signupPageR: signupPageReducer,
})