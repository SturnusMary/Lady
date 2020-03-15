import {combineReducers} from 'redux';
import {rootReducer} from './rootReducer';
import {cardPageReducer} from './cardPageReducer';
import {headerReducer} from './headerReducer';
import {loginPageReducer} from './loginPageReducer';
import {signupPageReducer} from './signupPageReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
    rootR: rootReducer,
    cardPageR: cardPageReducer,
    headerR: headerReducer,
    loginPageR: loginPageReducer,
    signupPageR: signupPageReducer,
    firestoreR: firestoreReducer,
    firebaseR: firebaseReducer
})