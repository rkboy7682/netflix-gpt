// import React from "react";

export const validate = (email, password, name) => {
  const IsEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const IsPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const IsNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!IsEmailValid) {
    return "Email id is not valid";
  }
  if (!IsPasswordValid) {
    return "Password is not valid";
  }
  // if (!IsNameValid) {
  //   return "Name is not valid";
  // }
  return null;
};
