import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <h2>Home.jsx</h2>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
