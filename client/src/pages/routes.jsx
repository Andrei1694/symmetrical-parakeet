import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import ProfilePage from "./ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
