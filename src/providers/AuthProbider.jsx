
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../configFile/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";




export const AuthContext = createContext(null)
const AuthProbider = ({ children }) => {

  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true)
  const axiosPulic = useAxiosPublic()

  const googlePoroviver = new GoogleAuthProvider()
  const createUser = (email, name, password) => {
    return createUserWithEmailAndPassword(auth, email, name, password);
  }

  const signeIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignIn = () => {
    setloading(true)
    return signInWithPopup(auth, googlePoroviver)
  }
  useEffect(() => {
    const unSusvribe = onAuthStateChanged(auth, currenUser => {
      console.log('current valu', currenUser)
      setuser(currenUser);
      return () => {
        unSusvribe()
      }
    })
  }, [])

  useEffect(() => {
    const unSusvribe = onAuthStateChanged(auth, currenUser => {
      console.log('current valu', currenUser)
      setuser(currenUser);
      if (currenUser) {
        const userInfo = { email: currenUser.email }
        axiosPulic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
              setloading(false)
            }
          })
      }
      else {
        localStorage.removeItem('access-token')
        setloading(false)
      }
      
    })
    return () => {
      unSusvribe()
    }
  }, [axiosPulic])

  const logOut = () => {
    setloading(true)
    return signOut(auth);
  }

  const updateUserProfil = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  }


  const autInfo = {
    user,
    loading,
    logOut,
    createUser,
    signeIn,
    updateUserProfil,
    googleSignIn,

  }
  return (
    <AuthContext.Provider value={autInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider


