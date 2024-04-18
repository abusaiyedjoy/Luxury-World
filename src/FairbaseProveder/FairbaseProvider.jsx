import { createContext, useEffect, useState } from "react";
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
import { auth } from "./../../fairbase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FairbaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoader(false);
    });
    return () => unsubscribe(); 
  }, []);

  const signIn = (authMethod) => {
    setLoader(true);
    return authMethod.then((result) => {
      setUser(result.user);
      setLoader(false);
    }).catch((error) => {
      console.error("Authentication error:", error);
      setLoader(false);
    });
  };

  const createUser = (email, password) => {
    return signIn(createUserWithEmailAndPassword(auth, email, password));
  };

  const signInUser = (email, password) => {
    return signIn(signInWithEmailAndPassword(auth, email, password));
  };

  const GoogleLogin = () => {
    return signIn(signInWithPopup(auth, googleProvider));
  };

  const GithubLogin = () => {
    return signIn(signInWithPopup(auth, githubProvider));
  };

  const LogOut = () => {
    setLoader(true);
    signOut(auth).then(() => {
      setUser(null);
      setLoader(false);
    }).catch((error) => {
      console.error("Sign out error:", error);
      setLoader(false);
    });
  };

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

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

FairbaseProvider.propTypes = {
  children: PropTypes.node
};

export default FairbaseProvider;
