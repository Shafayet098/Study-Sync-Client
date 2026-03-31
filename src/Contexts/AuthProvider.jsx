import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/fireBase.init';

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser =(obj)=>{
        return updateProfile(auth.currentUser,obj);
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const googleSignIN=()=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User On Auth State Changed: ", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        signIn,
        signUp,
        logOut,
        loading,
        updateUser,
        googleSignIN

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;