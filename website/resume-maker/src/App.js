import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Download from "./pages/Download";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="home"
          element={
            <>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            </>
          }
        />
        <Route path="download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
