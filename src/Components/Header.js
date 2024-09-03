import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANG } from "../utils/constant";
import { toggelGptSerachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGPT = () => {
    dispatch(toggelGptSerachView());
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

  const handleLangChange = (e) => {
    // console.log("event", e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

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
            className=" w-12 h-12 rounded-full border-2"
            // src={user.photoURL}
            src={user.photoURL}
            alt="netflix-Login"
          />
          <button
            className="text-white mr-2 border-2 rounded-md font-semibold p-1 m-4 text-sm h-8 mt-2 bg-blue-500 "
            onClick={handleGPT}
          >
            {showGptSearch ? "Home" : "GPT_Search"}
          </button>
          <button
            className="text-white mr-2 border-2 rounded-md font-semibold p-1 m-4 text-sm h-8 mt-2 bg-blue-500 "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          {showGptSearch && (
            <select
              className="text-white mr-2 border-2 rounded-md font-semibold p-1 m-4 text-sm h-8 mt-2 bg-blue-500 "
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifire} value={lang.identifire}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
