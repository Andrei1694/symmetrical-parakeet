import logo from "../assets/logo.svg";
import Button from "../components/Button";

export default function WelcomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[812px]">
      <img src={logo} alt="Logo" />
      <Button className="mt-[128px]">Sign Up</Button>
      <div className="font-lato mb-[96px]">
        <span className="text-neutral-700 text-base font-normal leading-normal">
          {`Already have an account?  `}
        </span>
        <a className="font-extrabold font-base underline leading-tight">
          Log In
        </a>
      </div>
    </div>
  );
}
