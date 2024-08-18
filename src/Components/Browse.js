import React from "react";
import Header from "./Header";
import useTmdbApi from "./Hooks/useTmdbApi";
import MainContainer from "./MainContainer";
import SecodaryContainer from "./SecodaryContainer";
const Browse = () => {
  const data = useTmdbApi();
  console.log("API", data);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecodaryContainer />
    </div>
  );
};

export default Browse;
