import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import { firebaseApp } from '../firebase';
import 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Navbar from "./Navbar";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Notification from "./Notification";
import Page from "./Page"
import Page1 from "./Page1";
import Page2 from "./Page2";

function Main() {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const [logedUser, setlogedUser] = useState(false);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const storedEmail = localStorage.getItem("acmotor-user");
    if (storedEmail) {
      setlogedUser(storedEmail);
    }
  }, []);

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(false); 
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowSignInForm(false); 
  };

  const closeForms = () => {
    setShowSignInForm(false);
    setShowSignUpForm(false);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
    
      await signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value);

     

    }
    catch (error) {
      console.error('Error during sign-in: ', error);

      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
  
        setSignInError(true);
      }
    }
  };


  return (
    <div>
      <Navbar logedUser={logedUser} toggleSignInForm={toggleSignInForm} />
      {showSignInForm && <SignInForm />}
      {showSignUpForm && <SignUpForm toggleSignInForm={toggleSignInForm} />} 
      <Page />
      <Page1 />
      <Page2 />
      <Notification />
    </div>
  );
}

export default Main;
