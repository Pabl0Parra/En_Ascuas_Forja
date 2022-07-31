import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //doc to retrieve docs, getDoc to get the doc data.....

const firebaseConfig = {
  apiKey: "AIzaSyBQO5EfT29QRyXV-t7P0eea3qlBgQykndc",
  authDomain: "en-ascuas-v2-db.firebaseapp.com",
  projectId: "en-ascuas-v2-db",
  storageBucket: "en-ascuas-v2-db.appspot.com",
  messagingSenderId: "1048550524545",
  appId: "1:1048550524545:web:ca9139740fe72fb0fdef80",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  // snapshot allows us to check if an instance exists in the db & also allows us to access the data
  const userSnapshot = await getDoc(userDocRef);

  // console.log("shot -->", userSnapshot.exists()); // returns false

  // check if user doesn't exists ---> true ---> set new user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // to know when user signs in

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error created", error.message);
    }
  }
  return userDocRef;
};
