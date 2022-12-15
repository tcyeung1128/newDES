import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Views */
import DES from "./views/DES/DES";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DES />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
