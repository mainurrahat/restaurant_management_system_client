import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { data } from "autoprefixer";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category == "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subheading="Popular Items "
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 ">
        {Menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
