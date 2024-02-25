import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../firebase';

const db = getFirestore(firebaseApp);

const addUser = async (name, email, password) => {
  try {
    const emailSnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
    if (!emailSnapshot.empty) {

      return new Error('Email already exists');
    }


    await addDoc(collection(db, 'users'), { name, email, password });

    return null;
  } catch (error) {
    console.error('Error adding document: ', error);
    return error;
  }
};

export { addUser };