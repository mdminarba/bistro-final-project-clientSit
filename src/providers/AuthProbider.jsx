import axios from "axios";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../configFile/firebase.config";

 


export const AuthContext = createContext(null)
const AuthProbider = ({ children }) => {

  const [user, setuser] = useState(null);
  const [loding, setloding] = useState(true)
  const createUser = (email, name, password) => {
    return createUserWithEmailAndPassword(auth, email, name, password);
  }

  const signeIn = (email, password) => {
    setloding(true)
    return signInWithEmailAndPassword(auth, email, password)
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
    const unSubscribe = onAuthStateChanged(auth, currenUser => {
      const userEmail = currenUser.email || currenUser.user.email
      const loggeduser = { email: userEmail }
      setuser(currenUser)
      setloding(false)
      if (createUser) {
        axios.post("http://localhost:5002/jwt",  loggeduser, { widthCredentials: true })
          .then(res => {
            console.log("token respons", res.data)
          })
      }
      
      else {
        axios.post("http://localhost:5001/logOut",  currenUser, { widthCredentials: false })
          .then(res => {
            console.log(res.data)
          })
    }
  })

    return () => {
      unSubscribe()
    }
  }, [])
  const logOut = () => {
    setloding(true)
    return signOut(auth);
  }




  const autInfo = {
    user,
    loding,
    logOut,
    createUser,
    signeIn,

  }
  return (
    <AuthContext.Provider value={autInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider


