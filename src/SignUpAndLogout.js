import React from "react";
import { auth, provider } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";
import startCase from "lodash.startcase";

const User = (props) => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="user-container">
      {user ? <UserDetail userName={user.displayName}/> : <Login />}
    </div>
  );
};

const Login = () => {
  // Sign in with google
  const signin = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <div>
      <center>
        <button onClick={signin}>Sign In with Google</button>
      </center>
    </div>
  );
};

const UserDetail = ({userName}) => {

  const signOut = () => {
    auth.signOut();
  };

  return (
      <div>
        <center>
          <button onClick={signOut}>Hello {startCase(userName.toLowerCase())}</button>
        </center>
      </div>
    );
}

export default User;
