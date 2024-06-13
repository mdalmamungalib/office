import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PasswordInput from "./Components/PasswordInput";
import TaskCard from "./Components/TaskCard/TaskCard";

function App() {

  return (
    <>
      <PasswordInput />
      <TaskCard/>
    </>
  );
}

export default App;
