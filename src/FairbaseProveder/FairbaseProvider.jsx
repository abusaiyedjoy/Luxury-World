import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../../fairbase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FairbaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true)

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    Sign In User
  const signInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update Profile

const updateUserProfile = (name, image) => {
  setLoader(true);
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: image
  }).then(() => {
    setUser(auth.currentUser); 
    setLoader(false);
  });
};


  //    GoogleLogin
  const GoogleLogin = () => {
    setLoader(true)
    signInWithPopup(auth, googleProvider);
  };
  //    GithubLogin
  const GithubLogin = () => {
    setLoader(true)
    signInWithPopup(auth, githubProvider);
  };

  //    SignOut
  const LogOut = () => {
    setUser(null);
    signOut(auth);
  };

  //    Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoader(false)
      }
    });
    return ()=>unsubscribe()
  }, []);

  const allValues = {
    createUser,
    signInUser,
    GoogleLogin,
    GithubLogin,
    LogOut,
    updateUserProfile,
    loader,
    user
  };
  console.log(user)

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FairbaseProvider;

FairbaseProvider.propTypes ={
  children:PropTypes.node
}
