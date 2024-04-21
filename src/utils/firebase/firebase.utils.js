import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5MQRT-pbTxFatRgNn_zaKTO6baSJ8obI',
  authDomain: 'shop-10ca5.firebaseapp.com',
  projectId: 'shop-10ca5',
  storageBucket: 'shop-10ca5.appspot.com',
  messagingSenderId: '789944121382',
  appId: '1:789944121382:web:83fea7623c2feca6918ee7',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
