import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";
import SignUpForm from "./SignUpForm"; 
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);
const db = getFirestore();

function SignInForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); 

  const navigate = useNavigate()

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      const userQuerySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", email)));
      if (userQuerySnapshot.empty) {
        alert("Email or password is incorrect! Please try again.");
        return;
      }

      const userDoc = userQuerySnapshot.docs[0];
      const userPassword = userDoc.data().password;

      if (userPassword === password) {
        localStorage.setItem("acmotor-user", email);
        navigate("/home");
      } else {
        alert("Email or password is incorrect! Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-in: ", error);
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        alert("Email or password is incorrect! Please try again.");
      } else {

      }
    }
  };

  return (
    <div className="centered-form" style={{ backgroundImage: "url('/src/pic1.jpg');" }}>
      {showSignUp ? (
        <SignUpForm /> 
      ) : (
        <div className="form-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <form onSubmit={handleSignInSubmit} style={{ width: "400px", padding: "20px", backgroundColor: "white", borderRadius: "10px", marginBottom: "120px" }}>
            <h1><p style={{ marginBottom: "20px", marginLeft: "130px", color: "#29335c" }}>Sign in</p></h1>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: "#29335c", color: "white", marginTop: "10px" }}>Log In</button>
            <p style={{ marginTop: "20px", marginLeft: "60px" }}>
              Don't have an account?{" "}
              <a href="#!" onClick={() => setShowSignUp(true)}>Create One</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
