import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center h-[812px]">
      <img src={logo} alt="Logo" />
      <Button className="mt-[128px]" onClick={() => navigate("/signup")}>
        Sign Up
      </Button>
      <div className="font-lato mb-[96px]">
        <span className="text-neutral-700 text-base font-normal leading-normal">
          {`Already have an account?  `}
        </span>
        <Link
          to="/login"
          className="font-extrabold font-base underline leading-tight"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
