import { Link } from "react-router-dom";
import arrow from "../assets/right-arrow.svg";

export default function Box({ variant, children }) {
  const colorMap = new Map([
    ["red", "bg-red-400"],
    ["teal", "bg-teal-400"],
    ["blue", "bg-blue-500"],
    ["yellow", "bg-amber-400"],
  ]);
  if (variant && !colorMap.has(variant))
    throw new Error("Variant dosent exist");
  const color = colorMap.get(variant) ?? colorMap.get("teal");
  return (
    <div className={`w-[156px] h-[156px] ${color} rounded-[10px] shadow`}>
      <div className="flex flex-col p-4 h-[156px]">
        <h5 className="text-white font-bold font-lato m-w-[124px] leading-6 text-[20px]">
          {children}
        </h5>
        <div className="flex flex-col items-end justify-end grow-1 h-full">
          <div className="w-8 h-8 bg-white rounded-[50%] flex justify-center items-center cursor-pointer ml-auto">
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
