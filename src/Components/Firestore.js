import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../firebase';

const db = getFirestore(firebaseApp);

const addUser = async (name, email, password) => {
  try {
    // Check if the email already exists in the "users" collection
    const emailSnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
    if (!emailSnapshot.empty) {
      // Email already exists, handle accordingly
      return new Error('Email already exists');
    }

    // Create a new document in the "users" collection
    await addDoc(collection(db, 'users'), { name, email, password });
    // Successful sign-up logic
    return null;
  } catch (error) {
    console.error('Error adding document: ', error);
    return error;
  }
};

export { addUser };