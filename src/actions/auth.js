import googleAuthProvider, {firebase} from '../firebase/firebase';

//action
export const login = (uid)=>({
    type:'LOGIN',
    uid
});

export const logout = (uid)=>({
    type:'LOGOUT',
    uid
});




export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};


export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};


