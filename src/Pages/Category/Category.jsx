// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import img1 from "../Category/slide1.jpg";
import img2 from "../Category/slide2.jpg";
import img3 from "../Category/slide3.jpg";
import img4 from "../Category/slide4.jpg";
import img5 from "../Category/slide5.jpg";

const Category = () => {
  return (
    <div className="my-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
