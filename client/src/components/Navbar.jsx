import heart from "../assets/heart.svg";
import bag from "../assets/shopping-bag.svg";
import tag from "../assets/tag.svg";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";

const icons = new Map([
  ["home", home],
  ["heart", heart],
  ["search", search],
  ["tag", tag],
  ["bag", bag],
]);

const IconContainer = ({ src, alt }) => {
  return (
    <div className="w-5 h-5 hover:w-10 hover:h-10 cursor-pointer hover:bg-yellow-400 hover:scale-100 rounded-full flex items-center justify-center">
      <img src={src} alt={alt} />
    </div>
  );
};

function Navbar() {
  const renderIcons = () => {
    return Array.from(icons.entries()).map(([name, src]) => {
      console.log(name, src);
      return (
        <Link to="/home">
          <IconContainer src={`${src}`} alt={name} key={name} />
        </Link>
      );
    });
  };
  return (
    <footer className="w-full h-20  bg-white fixed bottom-0 border-t-[1px] border-gray-50 flex items-center flex-shrink-0">
      <div className="flex justify-around items-center h-10 w-full">
        {renderIcons()}
      </div>
    </footer>
  );
}

export default Navbar;
