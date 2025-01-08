import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8 ">
      <p className="text-yellow-500 mb-2">---{subheading}---</p>
      <h1 className="text-5xl uppercase border-y-4 py-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
