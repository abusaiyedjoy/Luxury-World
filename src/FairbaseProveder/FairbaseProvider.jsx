import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../../fairbase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FairbaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    Sign In User
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //    GoogleLogin
  const GoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  //    GithubLogin
  const GithubLogin = () => {
    signInWithPopup(auth, githubProvider);
  };

  //    SignOut
  const LogOut = () => {
    setUser(null);
    signOut(auth);
  };

  //    Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValues = {
    createUser,
    signInUser,
    GoogleLogin,
    GithubLogin,
    LogOut,
    user
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FairbaseProvider;
