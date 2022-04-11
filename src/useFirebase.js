import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useState } from "react";
import auth from "./firebase.init";

const useFirebase = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const signInGoogle = () => {
    signInWithGoogle();
  };

  return { user, signInGoogle };
};
export default useFirebase;
