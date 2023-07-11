import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header locationText="Log In" />
      <div className="flex flex-col justify-center items-center">
        <LoginForm />
        <div className="w-[327px] h-5 relative">
          <div className="left-[155px] top-0 absolute text-center text-neutral-700 text-base font-extrabold leading-tight">
            or
          </div>
          <div className="w-[148px] h-[0px] left-0 top-[12px] absolute border border-neutral-300"></div>
          <div className="w-[148px] h-[0px] left-[179px] top-[12px] absolute border border-neutral-300"></div>
        </div>
        <div className="flex flex-col">
        <Button className="mb-4">Continue with Facebook</Button>
        <Button>Continue with Google</Button>
        </div>
    
        <div className="font-lato">
          <span className="text-neutral-700 text-base font-normal leading-normal">Already have an account?</span> 
          <span className="font-extrabold font-base underline leading-tight">Log in</span>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
