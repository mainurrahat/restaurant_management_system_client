import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import FeImg from "../../../src/assets/home/featured.jpg";
import "../Featured/featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subheading="CheCk It out"
        heading="Featured Items "
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 ">
        <div>
          <img src={FeImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">where can i get some? </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            pariatur fugit totam labore doloremque tempora laudantium cum eius
            odit ratione.
          </p>
          <button
            className="
          btn btn-outline border-0 border-b-4"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
