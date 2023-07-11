export default function OrDivider({ className }) {
  return (
    <div className={`w-[327px] h-5 relative ${className}`}>
      <div className="left-[155px] top-0 absolute text-center text-neutral-700 text-base font-extrabold leading-tight">
        or
      </div>
      <div className="w-[148px] h-[0px] left-0 top-[12px] absolute border border-neutral-300"></div>
      <div className="w-[148px] h-[0px] left-[179px] top-[12px] absolute border border-neutral-300"></div>
    </div>
  );
}
