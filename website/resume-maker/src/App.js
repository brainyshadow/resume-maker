import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Generateresume from "./pages/Generateresume";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import HowTo from "./pages/HowTo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />

        <Route path="home" element={<Home />} />
        <Route path="resume" element={<Generateresume />} />
        <Route path="upload" element={<Upload />} />
        <Route path="howto" element={<HowTo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
