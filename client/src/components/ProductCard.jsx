import AddToFavorites from "./AddToFavorites";
import demo from "../assets/demo_electronic.png";
import Pill from "./Pill";
import star from "../assets/star.svg";

export default function ProductCard() {
  return (
    <div className="w-[284px] h-[312px] flex-col justify-center items-center inline-flex shadow font-lato bg-gray-50 rounded-[10px]">
      <div className="w-[284px] h-40 justify-center items-center inline-flex">
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
