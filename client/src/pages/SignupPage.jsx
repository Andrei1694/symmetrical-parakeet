import Header from "../components/Header";
import OrDivider from "../components/OrDivider";
import SocialButton from "../components/SocialButton";
import google from "../assets/google.svg";
import fb from "../assets/facebook.svg";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
import SignupForm from "../forms/SignupForm";

export default function SignupPage() {
  return (
    <>
      <Header locationText="Sign Up" />
      <div className="flex justify-center items-center mt-6 mb-6">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <SignupForm />
        </div>
        <OrDivider className="mb-6 mt-6" />
        {/* button container */}
        <div className="flex flex-col mb-6">
          <SocialButton styleType="social" className="mb-1" icon={mail}>
            Continue with Mail
          </SocialButton>
          <SocialButton styleType="social" className="mb-1" icon={fb}>
            Continue with Facebook
          </SocialButton>
          <SocialButton icon={google} className="mb-6">
            Continue with Google
          </SocialButton>
          <div className="font-lato mb-[96px]">
            <span className="text-neutral-700 text-base font-normal leading-normal">
              {`Already have an account?  `}
            </span>
            <Link
              to="/login"
              className="font-extrabold font-base underline leading-tight"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
