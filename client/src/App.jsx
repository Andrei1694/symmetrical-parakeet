import { Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { router } from "./pages/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
