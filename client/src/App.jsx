import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <LoginForm />

      </div>
      <Navbar />
    </div>
  );
}

export default App;
