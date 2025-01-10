import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import ChefRecommends from "../Shared/ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <h2>Home.jsx</h2>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
