import AddToFavorites from "./AddToFavorites";
import demo from "../assets/demo_electronic.png";
import Pill from "./Pill";
import star from "../assets/star.svg";

export default function SmallCard() {
  return (
    <div className="w-[156px] h-[233px] flex-col justify-end items-center inline-flex rounded-[10px] shadow">
      <div className="image w-[156px] h-[136px] justify-center items-center inline-flex bg-gray-50 rounded-t-[10px]">
        <img className="w-14 shrink-0" src={demo} alt="Prod" />
        {/* <AddToFavorites /> */}
      </div>
      <div className="info p-4 font-lato text-gray-150">
        <h5 className="font-normal w-[124px] leading-6 text-gray-150">
          Apple 13” Macbook Pro
        </h5>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-extrabold leading-3">$2600.99</span>
          <span className="text-xs font-bold line-through opacity-90 text-gray-40">
            $2999.99
          </span>
        </div>
        <div className="flex items-center mt-2">
          <img className="mr-1" src={star} alt="star" />
          <span className="font-bold leading-4">4.5</span>
        </div>
      </div>
    </div>
  );
}
