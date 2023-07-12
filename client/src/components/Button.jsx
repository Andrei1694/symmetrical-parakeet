const Btn = (props) => {
  const { className, children, type } = props;
  return (
    <button
      onClick={props.onClick}
      type={type}
      className={`w-[327px] h-12 justify-center items-center inline-flex bg-yellow-400 rounded-2xl px-6 py-3.5 text-neutral-700 text-[16px] font-bold leading-tight font-lato ${className}`}
    >
      {children}
    </button>
  );
};

const DisabledButton = ({ children, className }) => {
  return (
    <button
      disabled={true}
      className={`w-[327px] text-base leading-tight font-bold bg-gray-50 h-12 text-gray-100 font-lato rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
};

function Button(props) {
  if (props.disabled) return <DisabledButton {...props} />;
  return <Btn disabled={props.disabled} {...props} />;
}

export default Button;
