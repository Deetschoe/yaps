import React from "react";
import { auth, db, provider } from "./lib/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { addDoc, collection } from "firebase/firestore";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        await addDoc(collection(db, "users"), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          accessToken: token,
          createdAt: new Date(),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Button
      title="Sign In With GitHub"
      icon={<Icon name="github-square" size={15} style={{ marginRight: 8 }} />}
      onPress={signIn}
      style={{ width: "100vw", height: 50, backgroundColor: "#000" }}
    />
  );
};

export default Login;
