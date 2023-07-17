import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../assets/avatar-fake.svg";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import ProductCard from "../components/ProductCard";
import demo from "../assets/demo_electronic.png";
function SmallCard() {
  return (
    <div className="w-[156px] h-[233px] flex-col justify-end items-center inline-flex rounded-[10px] shadow">
      <div className="image">
        <img className="" src={demo} alt="Prod" />
      </div>
      <div className="info p-4">dasd</div>
    </div>
  );
}

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
        <div>
          <h5 className="font-lato">HOT DEALS</h5>
          <SmallCard />
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
