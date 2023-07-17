import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-[2000px]">
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
