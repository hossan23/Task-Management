import { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);

 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
   setUser(currentUser);
   console.log(currentUser);
   setLoading(false);
   return () => {
    return unsubscribe();
   };
  });
 }, []);

 const signUp = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 };

 const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 };

 const logOut = () => {
  setLoading(true);
  return signOut(auth);
 };

 const google = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
 };

 const github = () => {
  setLoading(true);
  return signInWithPopup(auth, githubProvider);
 };

 const updateUserProfile = (name, photoURL) => {
  return updateProfile(auth.currentUser, {
   displayName: name,
   photoURL: photoURL,
  });
 };

 const userInfo = { user, loading, signUp, signIn, logOut, google, github, updateUserProfile };
 return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
