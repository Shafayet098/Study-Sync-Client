import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/fireBase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
    setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (obj) => {
    setLoading(true)
        return updateProfile(auth.currentUser, obj);
    }
    const logOut = async() => {
        setLoading(true)
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
            withCredentials: true
        })
        console.log(data)
        return signOut(auth)
    }
    const googleSignIN = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User On Auth State Changed: ", currentUser)
            setUser(currentUser)
            setLoading(false)
            if (currentUser.email) {
                const userData = { email: currentUser.email }
                axios.post(`${import.meta.env.VITE_API_URL
                    }/jwt`, userData, {
                    withCredentials: true
                }).then(res => console.log('Token: ', res.data))
                    .catch(err => console.log(err))
            }
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