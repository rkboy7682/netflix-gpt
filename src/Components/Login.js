import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggelForm = () => {
    setIsSignIn(!IsSignIn);
  };

  const handleValidate = () => {
    const message = validate(email.current.value, password.current.value);
    console.log(message);
    seterrorMessage(message);
    if (message) return;

    if (!IsSignIn) {
      //sing up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://i.natgeofe.com/n/66ebb94c-8a2c-4127-be21-cc6a658172a7/ST_berlin_GettyImages-1264514235_HR_2x1.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage + errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="background-logo"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute my-36 mx-auto right-0 left-0 p-10 px-20 bg-black bg-gradient-to-t bg-opacity-80"
      >
        <h1 className=" font-bold text-white text-3xl py-6">
          {IsSignIn ? "Sign In" : "Sign up"}
        </h1>

        {!IsSignIn && (
          <input
            ref={name}
            className="p-4 m-2 border-slate-500 border-2 text-white bg-slate-600 h-12 rounded-sm w-full bg-opacity-5"
            type="text"
            placeholder="Full name"
          />
        )}

        <input
          ref={email}
          className="p-4 m-2 text-white border-slate-500 border-2 bg-slate-600 h-12 rounded-sm w-full bg-opacity-5"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-4 m-2 text-white border-slate-500  bg-slate-600 border-2 h-12 rounded-sm w-full bg-opacity-5"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-semibold text-2xl">{errorMessage}</p>
        <button
          className=" p-2 m-2 rounded-md bg-red-600 text-white text-center w-full"
          onClick={handleValidate}
        >
          {IsSignIn ? "Sign In" : "Sign up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer"
          onClick={handleToggelForm}
        >
          {IsSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
