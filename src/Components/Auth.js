import { signInWithEmailAndPassword as signIn } from 'firebase/auth';
import { firebaseApp } from '../firebase';

const auth = getAuth(firebaseApp);

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await signIn(auth, email, password);
    // Successful sign-in logic
    return null;
  } catch (error) {
    console.error('Error during sign-in: ', error);
    return error;
  }
};

export { signInWithEmailAndPassword };