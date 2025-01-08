// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import img1 from "../Category/slide1.jpg";
import img2 from "../Category/slide2.jpg";
import img3 from "../Category/slide3.jpg";
import img4 from "../Category/slide4.jpg";
import img5 from "../Category/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-5">
      <section>
        <SectionTitle
          subheading={"From 11.00am to 10.10pm"}
          heading={"order online"}
        ></SectionTitle>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-black">
              salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-black">
              Pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-black">
              Soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-black">
              Cake
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="text-4xl uppercase text-center -mt-16 text-black">
              salads
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
