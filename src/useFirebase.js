import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from "./firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return { user, signInGoogle };
};
export default useFirebase;
