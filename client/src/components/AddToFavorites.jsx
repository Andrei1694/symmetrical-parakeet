import heart from "../assets/heart.svg";
export default function AddToFavorites() {
  return (
    <div className="p-2 left-[245px] top-[8px] absolute bg-white rounded-[100px] shadow justify-start items-start gap-2.5 inline-flex cursor-pointer">
      <div className="w-4 h-4 relative">
        <img src={heart} />
      </div>
    </div>
  );
}
