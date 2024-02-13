import React, { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { SignUpSuccessNotification } from "./Notification.js"; // Import your notification component

const SignUpForm = ({ showSignUpForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailExistsError, setEmailExistsError] = useState(null);
  const [passwordMatchError, setPasswordMatchError] = useState(null);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false); // State to control the display of success notification
  const [successMessage, setSuccessMessage] = useState("");

  // Initialize Firestore
  const db = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    }

    try {
      // Check if email already exists
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
      if (!querySnapshot.empty) {
        setEmailExistsError("The email address is already in use");
        return;
      }

      // Add user data to Firestore collection
      const docRef = await addDoc(collection(db, 'users'), {
        name: name,
        email: email,
        password: password,
        // You may choose to store additional user data here
      });
      
      console.log("Document written with ID: ", docRef.id);

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError(null); // Clear any previous errors
      setEmailExistsError(null); // Clear email existence error
      setPasswordMatchError(null); // Clear password match error
      setSuccessMessage("Sign up successful!"); // Set success message
      setShowSuccessNotification(true); // Show success notification
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Set a timeout to hide the success notification after 5 seconds
    if (showSuccessNotification) {
      const timeout = setTimeout(() => {
        setShowSuccessNotification(false);
        setSuccessMessage(""); // Clear success message
      }, 3000);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [showSuccessNotification]);

  return (
    <div className={showSignUpForm ? "sign-up-form active" : "sign-up-form"}>
      <form onSubmit={handleSubmit} style={{ width: "400px", padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
        <h2><p style={{ marginBottom: "20px",  color: "#29335c" }}>Sign Up For Free</p></h2>
        <div>
          <input
            type="text"
            placeholder="Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailExistsError && <p style={{ color: "red" }}>{emailExistsError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {passwordMatchError && <p style={{ color: "red" }}>{passwordMatchError}</p>}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {showSuccessNotification && <SignUpSuccessNotification message={successMessage} />} {/* Render success notification if showSuccessNotification is true */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
