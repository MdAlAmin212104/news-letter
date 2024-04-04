import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase-init";

export const AuthContext = createContext(null)





const Providers = ({ children }) => {
      
      const [user, setUser] = useState(null)

      const CreateUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }
      
      const logInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
                  
      }

      const logOut = () => {
            return signOut(auth)
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('User in the auth state changed', currentUser);
                  setUser(currentUser);
            });
            return () => {
                  unSubscribe();
            }
      }, [])


      
      const userInfo = {
            user,
            CreateUser,
            logInUser,
            logOut,
      
      }




      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default Providers;