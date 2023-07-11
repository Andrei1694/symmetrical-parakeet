import React from "react";
import apple from "../assets/apple.svg";
import fb from "../assets/facebook.svg";
import google from "../assets/google.svg";

const Btn = ({ children }) => {
  return (
    <button className="w-[327px] h-12 justify-center items-center inline-flex bg-yellow-400 rounded-2xl px-6 py-3.5 text-neutral-700 text-[16px] font-bold leading-tight font-lato">
      {children}
    </button>
  );
};

const SocialButton = ({ children, icon }) => {
  return (
    <button className="w-[327px] h-10 px-6 py-2.5 rounded-[100px] border border-neutral-700">
      <img src={icon} />
      {children}
    </button>
  );
};

const DisabledButton = ({children}) => {
  return(
    <button disabled={true} className="w-full text-base leading-tight font-bold bg-gray-50 h-12 text-gray-100 font-lato rounded-2xl">{children}</button>
  )
}

function getButtonType (styleType, props) {
  console.log(styleType)
  const buttonTypes = new Map([
    ["basic", <Btn {...props} />],
    ["social", <SocialButton {...props} />],
    ["disabled", <DisabledButton {...props} />]
  ]);
  if (!buttonTypes.has(styleType)) return buttonTypes.get("basic");
  return React.cloneElement(buttonTypes, props);
};

function Button(props) {
  const buttonComponent = getButtonType(props.styleType, props);
  return buttonComponent || <>error</>;
}

export default Button;
