function Input({label = "no label error"}) {
  return (
    <div className="w-[327px] h-[72px] relative">
      <div className="w-[327px] h-4 left-0 top-0 absolute">
        <div className="left-0 top-0 absolute justify-start items-center gap-1 inline-flex">
          <label className="text-neutral-700 text-[12px] font-extrabold leading-none">
            {label}
          </label>
        </div>
      </div>
      <div className="w-[327px] h-12 left-0 top-[24px] absolute">
        <input className="w-[327px] h-12 left-0 top-0 absolute bg-white rounded-2xl border border-neutral-300" />
      </div>
    </div>
  );
}

export default Input;
