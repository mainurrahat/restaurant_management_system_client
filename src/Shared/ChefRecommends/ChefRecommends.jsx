import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading={"should Try"}
        subheading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="flex w-fit mx-auto border-2 p-2 gap-2 rounded-xl">
        <div className="rounded-xl border-2 p-2 space-y-2">
          <img
            className="rounded-xl"
            src="/src/assets/home/slide5.jpg"
            alt=""
          />
          <h1 className="font-bold text-3xl">CaeSer Salad</h1>
          <p className="text-xl">
            Lettuce, Eggs, Parmesan <br /> Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn bg-slate-500">ADD TO CART</button>
        </div>
        <div>
          <div className="rounded-xl border-2 p-2 space-y-2">
            <img
              className="rounded-xl"
              src="/src/assets/home/slide5.jpg"
              alt=""
            />
            <h1 className="font-bold text-3xl">CaeSer Salad</h1>
            <p className="text-xl">
              Lettuce, Eggs, Parmesan <br /> Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn bg-slate-500">ADD TO CART</button>
          </div>
        </div>
        <div className="rounded-xl border-2 p-2 space-y-2">
          <img
            className="rounded-xl"
            src="/src/assets/home/slide5.jpg"
            alt=""
          />
          <h1 className="font-bold text-3xl">CaeSer Salad</h1>
          <p className="text-xl">
            Lettuce, Eggs, Parmesan <br /> Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn bg-slate-500">ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
