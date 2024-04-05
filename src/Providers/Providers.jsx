import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase-init";

export const AuthContext = createContext(null)





const Providers = ({ children }) => {

      
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)




      const CreateUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      
      const logInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
                  
      }


      const googleSingIn = () => {
            setLoading(true)
            const Provider = new GoogleAuthProvider();
            return signInWithPopup(auth, Provider);
      }

      const logOut = () => {
            return signOut(auth)
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  setLoading(false)
            });
            return () => {
                  unSubscribe();
            }
      }, [])


      
      const userInfo = {
            user,
            loading,
            CreateUser,
            logInUser,
            logOut,
            googleSingIn,
      
      }




      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default Providers;