export default function SocialButton({ className, children, icon }) {
  return (
    <button
      className={`w-[327px] flex items-center h-10 px-6 py-2.5 rounded-[100px] border border-neutral-700 ${className}`}
    >
      <img src={icon} className="max-w-[16px]" />
      <div className="text-center w-full">{children}</div>
    </button>
  );
}
