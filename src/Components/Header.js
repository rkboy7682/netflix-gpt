import React from "react";

const Header = () => {
  const handleSignOut = () => {};
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-30  flex justify-between">
      <img
        className=" w-44  mx-40 h-[92px] bg-gradient-to-b from-black py-2 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />

      <div className="p-6 px-8 flex">
        <img
          className=" w-12 h-12"
          // src={user.photoURL}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-Login"
        />
        <button
          className="rounded-md bg-gray-800 h-8 m-2 p-2 text-slate-200"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
