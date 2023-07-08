function Input({ type, label = "no label error" }) {
  return (
    <div className="w-[327px] h-[72px]">
      <div className="justify-start items-center  inline-flex">
        <label className="gap-1 h-4 text-neutral-700 text-[12px] font-extrabold leading-none">
          {label}
        </label>
      </div>
      <div className="w-[327px] h-12">
        <input
          type={type}
          className="pl-4 py-[14px] w-[327px] h-12 bg-white rounded-2xl border border-neutral-300 text-neutral-700 text-[16px] font-normal leading-normal"
        />
      </div>
    </div>
  );
}

export default Input;
