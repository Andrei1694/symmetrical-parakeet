import Header from "../components/Header";
import OrDivider from "../components/OrDivider";
import SocialButton from "../components/SocialButton";
import LoginForm from "../forms/LoginForm";
import google from "../assets/google.svg";
import fb from "../assets/facebook.svg";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <>
      <Header locationText="Log In" />
      <div className="flex justify-center items-center mt-6 mb-6">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <LoginForm />
        </div>
        <OrDivider className="mb-6 mt-6" />
        {/* button container */}
        <div className="flex flex-col mb-6">
          <SocialButton styleType="social" className="mb-1" icon={fb}>
            Continue with Facebook
          </SocialButton>
          <SocialButton icon={google} className="mb-6">
            Continue with Google
          </SocialButton>
          <div className="font-lato mb-[96px]">
            <span className="text-neutral-700 text-base font-normal leading-6 mr-2">
              {`New to Habitual?`}
            </span>
            <Link
              to="/signup"
              className="font-extrabold font-base underline leading-5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
