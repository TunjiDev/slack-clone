import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      // console.log(result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    } catch (error) {
      alert(error.message);
    }
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.ibb.co/C1CR0R8/download.png" alt="slack logo" />

        <h1>Sign in to TunjiDev slack</h1>
        <p>tunjidev.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
