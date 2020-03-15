import * as Actions from '../constants/actions';

export function setWidth(innerWidth) {
    return {type: Actions.SET_WIDTH, innerWidth,}
}

export function isPreloader(bool) {
    return {type: Actions.IS_PRELOADER, bool}
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

export function signIn(credentials) {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export function signOut(){
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export function signUp(newUser) {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                name: newUser.name,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                initials: newUser.name.split(' ')[0][0] + newUser.name.split(' ')[1][0]
           }).then(() => {
               dispatch({type: 'SIGNUP_SUCCESS'})
           })
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err})
       })
    }
}

export function bayGoods(goods){
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(goods)
    }
}

export function saveGoods(goods){
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const profileId = getState().firebaseR.auth.uid;
      
        firestore.collection('saved').doc(profileId).set({
            'user': goods, 
            }, {merge: true})
            .then(() => {
                dispatch({type: Actions.SAVE_GOODS, goods});
        })
    }
}