import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      // Sign out Logic
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // bulid error page
        navigate("/error");
      });
  };

  // bug fixed for redirect
  useEffect(() => {
    // signout, signin sign up , authantication change then it will call
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // signup and signin
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // sign Out call
        dispatch(removeUser());
        navigate("/");
      }
    });
    // here we are unmounting component or cleaning because it will not call any time
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-30  flex justify-between">
      <img
        className=" w-44  mx-40 h-[92px] bg-gradient-to-b from-black py-2 "
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />

      {/* bug fix show update signout  */}
      {user && (
        <div className="p-6 px-8 flex">
          <img
            className=" w-12 h-12"
            // src={user.photoURL}
            src={user.photoURL}
            alt="netflix-Login"
          />
          <button
            className="rounded-md bg-gray-800 h-8 m-2 p-2 text-slate-200"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
