import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Generateresume from "./pages/Generateresume";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="resume" element={<Generateresume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
