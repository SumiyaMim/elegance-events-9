/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  //google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in user
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
  }

  // log out user
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // observer
  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
     });
      return () => {
        unSubscribe()
      }
  }, [])

  const authInfo = {user, googleLogin, createUser, logIn, handleUpdateProfile, logOut, loading}
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
