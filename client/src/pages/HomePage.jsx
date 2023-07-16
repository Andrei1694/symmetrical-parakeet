import demo from "../assets/demo_electronic.png";
import star from "../assets/star.svg";
import heart from "../assets/heart.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../assets/avatar-fake.svg";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
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
function Pill({ children, colorOption }) {
  const color1 = ["text-green-500", "bg-emerald-50"];
  const color2 = ["text-blue-400", "bg-blue-50"];
  return (
    <div className="flex-col justify-start items-center gap-2.5 inline-flex">
      <div
        className={`px-2 py-1 ${color1[1]} rounded-[100px] flex-col justify-start items-start gap-2.5 flex`}
      >
        <h5
          className={`${color1[0]} text-xs font-extrabold uppercase leading-3`}
        >
          {children}
        </h5>
      </div>
    </div>
  );
}
function AddToFavorites() {
  return (
    <div className="p-2 left-[245px] top-[8px] absolute bg-white rounded-[100px] shadow justify-start items-start gap-2.5 inline-flex cursor-pointer">
      <div className="w-4 h-4 relative">
        <img src={heart} />
      </div>
    </div>
  );
}
function ProductCard() {
  return (
    <div className="w-[284px] h-[312px] flex-col justify-center items-center inline-flex shadow font-lato bg-gray-50 rounded-[10px]">
      <div className="w-[285px] h-40 justify-center items-center inline-flex">
        <img className="shrink-0  py-4" src={demo} />
        <AddToFavorites />
      </div>
      <div className="p-4 bg-white flex-col justify-start items-start gap-4 flex">
        <div className="flex-col justify-start items-center gap-1 flex">
          <div className="w-[253px] text-gray-100 text-xl font-normal leading-6">
            Bose Headphones
          </div>
          <div className="justify-center items-start gap-[73px] inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              {/* Price */}
              <div className="opacity-90 text-neutral-700 text-base font-extrabold leading-tight">
                $265.99
              </div>
              {/* Discount */}
              <div className="opacity-90 text-neutral-300 text-xs font-bold line-through leading-3">
                $279.99
              </div>
            </div>
            <Pill>10% OFF</Pill>
          </div>
          <div className="w-[253px] text-gray-150 text-xs font-normal leading-none">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>
        <div className="justify-center items-start gap-[61px] inline-flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="w-2.5 h-2.5">
                <img src={star} alt="Star" />
              </div>
              <div className="justify-start items-center gap-px flex">
                <div className="text-neutral-700 text-xs font-bold leading-none">
                  5.0
                </div>
                <div className="text-neutral-700 text-xs font-normal leading-none">
                  (34)
                </div>
              </div>
            </div>
            <div className="text-right text-neutral-700 text-xs font-bold leading-none">
              Category
            </div>
          </div>
          <Pill>Staff Pick</Pill>
        </div>
      </div>
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
        <div className="flex justify-start">
          <div className="w-[156px] h-[156px] p-4 bg-red-400 rounded-[10px] shadow flex-col justify-center items-end gap-5 inline-flex">
            <div className="w-[124px] text-white text-xl font-bold leading-normal">
              Shopping habits and interests
            </div>
            <div className="w-8 h-8 pr-[15px] shadow justify-start items-center inline-flex">
              <div className="w-[17px] h-12 pb-4 flex-col justify-start items-center inline-flex">
                <div className="p-2 bg-white rounded-[15px] justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[156px] h-[156px] justify-center items-center inline-flex">
          <div className="w-[156px] h-[156px] p-4 bg-teal-400 rounded-[10px] shadow flex-col justify-center items-end gap-5 inline-flex">
            <div className="w-[124px] text-white text-xl font-bold leading-normal">
              Today’s trending items
            </div>
            <div className="w-8 h-8 pr-[15px] shadow justify-start items-center inline-flex">
              <div className="w-[17px] h-12 pb-4 flex-col justify-start items-center inline-flex">
                <div className="p-2 bg-white rounded-[15px] justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
