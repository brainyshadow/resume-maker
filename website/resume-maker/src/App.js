import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Generateresume from "./pages/Generateresume";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />

        <Route path="home" element={<Home />} />
        <Route path="resume" element={<Generateresume />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
