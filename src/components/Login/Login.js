import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import login from '../../images/login.png'
import firebaseConfig from './firebase.config';
import { emailContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}




const Login = () => {
    const [ setLoggedInUser] = useContext(emailContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleClick = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        console.log('clicked');
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                setLoggedInUser(user.email);
                history.replace(from);
                console.log(token);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    return (
        <div className='row'>
            <div className='col-md-6 justify-content-center d-flex align-items-center' >

                <button onClick={handleClick} style={{ width: '300px', height: '40px' }} className='btn-brand'>Sign in</button>

            </div>

            <div className='col-md-6'>
                <img style={{ height: '100%' }} src={login} alt="" />
            </div>

        </div>
    );
};

export default Login;