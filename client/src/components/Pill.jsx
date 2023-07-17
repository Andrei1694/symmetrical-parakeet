export default function Pill({ children, colorOption }) {
  const color1 = ["text-green-500", "bg-emerald-50"];
  const color2 = ["text-blue-400", "bg-blue-50"];
  return (
    <div className="flex-col justify-start items-center gap-2.5 inline-flex">
      <div
        className={`px-2 py-1 ${color1[1]} rounded-[100px] flex-col justify-start items-start gap-2.5 flex`}
      >
        <h5
          className={`${color1[0]} text-xs font-extrabold uppercase leading-3`}
        >
          {children}
        </h5>
      </div>
    </div>
  );
}
