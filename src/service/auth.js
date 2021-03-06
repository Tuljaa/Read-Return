import firebase from "../config/firebase-config";

const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider).then((res)=>{
       // console.log(res.user);
        return res.user;
    }).catch((err)=>{ console.log('Error in auth.js',err); return err; });

}

export default socialMediaAuth;