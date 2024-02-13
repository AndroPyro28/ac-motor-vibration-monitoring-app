import React, { useState } from "react";
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

function Main() {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(false); // Close sign-up form when opening sign-in form
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowSignInForm(false); // Close sign-in form when opening sign-up form
  };

  const closeForms = () => {
    setShowSignInForm(false);
    setShowSignUpForm(false);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value);
  
      // Successful sign-in logic
      // ...
  
    }
    catch (error) {
      console.error('Error during sign-in: ', error);
    
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        // Set signInError to true for user not found or wrong password
        setSignInError(true);
      }
    }
  };
  

  return (
    <div>
      <Navbar toggleSignInForm={toggleSignInForm}/>
      {showSignInForm && <SignInForm />}
      {showSignUpForm && <SignUpForm toggleSignInForm={toggleSignInForm} />} {/* Pass toggleSignInForm to SignUpForm */}
      <Page/>
      <Page1/>
      <Notification />
    </div>
  );
}

export default Main;
