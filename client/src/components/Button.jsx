import apple from "../assets/apple.svg";
import fb from "../assets/facebook.svg";
import google from "../assets/google.svg";

const Btn = ({text ="No value"}) => {
  return (
    <button className="w-[327px] h-12 justify-center items-center inline-flex">
      <div className="w-[327px] px-6 py-3.5 bg-yellow-400 rounded-2xl flex-col justify-start items-center inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-center text-neutral-700 text-[16px] font-bold leading-tight">
            {text}
          </div>
        </div>
      </div>
    </button>
  );
};

const SocialButton = ({ text, image }) => {
  return (
    <div className="w-[327px] h-10 relative">
      <div className="h-10 px-6 py-2.5 left-0 top-0 absolute rounded-[100px] border border-neutral-700 flex-col justify-start items-center inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <img src={google} />
          <div className="text-center text-neutral-700 text-[16px] font-semibold leading-tight">
            Continue with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

const buttonTypes = new Map([
    ["basic", <Btn />],
    ["social", <SocialButton text="Continue with Facebook" image={fb} />],
  ]);
function Button({type = 'basic', text}) {
    const buttonComponent = buttonTypes.get(type);
    return buttonComponent || null; 
}

export default Button;
