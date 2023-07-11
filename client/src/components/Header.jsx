import xIcon from "../assets/x.svg";
function Header({ locationText }) {
  return (
    <div className="w-full h-[104px] border-b-[1px] border-gray-50">
      <div className="mt-16 flex">
        <img src={xIcon} alt="X" className="ml-6 mr-[23px] cursor-pointer" />
        <div className="w-[241px] text-center font-lato font-extrabold text-base leading-tight">
          {locationText}
        </div>
      </div>
    </div>
  );
}

export default Header;
