import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase.config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  function handleSignIn() {
    if (!auth.currentUser) {
      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res?.user?.displayName);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("user already loggen in");
    }
  }

  function handleSignOut(e) {
    signOut(auth).then(() => {
      console.log("signn out");
      navigate("/");
    });

    console.log(auth);
  }

  return (
    <div className="max-w-screen-xl  mx-auto py-[100px]">
      <div className="flex justify-center items-center">
        {!auth.currentUser ? (
          <button
            onClick={() => {
              handleSignIn();
              setState(true);
            }}
            className="border-[2px] border-black p-4"
          >
            SIgnUp with Google
          </button>
        ) : (
          <button
            onClick={() => {
              handleSignOut();
              setState(false);
            }}
            className="border-[2px] border-black p-4"
          >
            SIgnOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
