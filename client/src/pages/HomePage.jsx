import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../assets/avatar-fake.svg";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import ProductCard from "../components/ProductCard";
import SmallCard from "../components/SmallCard";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* <div className="w-[752px] h-[752px] bg-yellow-400 rounded-full absolute translate-x-[25%] translate-y-[-50%] z-0" /> */}
      <div className="w-[325px] z-10">
        <div className="flex items-center mt-[77px]">
          <h2 className="font-lato font-extrabold text-xs uppercase leading-3 text-gray-150 mr-auto">
            Trending
          </h2>
          <Link
            to="/profile"
            className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer"
          >
            <div className="w-8 h-8 bg-yellow-400">
              <img src={avatar} alt="avatar" />
            </div>
            <h5 className="text-sm font-lato text-gray-150 leading-4 font-bold w-8 whitespace-nowrap">
              Log In
            </h5>
          </Link>
        </div>

        <h1 className="font-lato font-bold leading-8 font text-[28px] text-gray-150 w-32">
          Find the stuff you love.
        </h1>
        <div className="mt-6">
          <Swiper
            width={300}
            spaceBetween={16}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <h5 className="font-lato font-extrabold text-xs uppercase text-gray-150">
              HOT DEALS
            </h5>
            <h5 className="font-lato font-extrabold text-xs uppercase text-gray-100 underline leading-4">
              SEE ALL
            </h5>
          </div>
          <div className="mt-6">
            <Swiper
              width={156}
              spaceBetween={16}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <SmallCard />
              </SwiperSlide>
              <SwiperSlide>
                <SmallCard />
              </SwiperSlide>
              <SwiperSlide>
                <SmallCard />
              </SwiperSlide>
              <SwiperSlide>
                <SmallCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Boxes */}
        <div className="flex flex-row flex-wrap w-[325px] mt-12 gap-[13px]">
          <Box>Lorem ipsum dolor sit amet consectetur.</Box>
          <Box variant="red">Lorem ipsum dolor sit amet.</Box>
          <Box variant="blue">Lorem ipsum dolor sit amet.</Box>
          <Box variant="yellow">Lorem ipsum dolor sit amet.</Box>
        </div>
      </div>
    </div>
  );
}
