import Home from "./routes/home/Home";
import "./app.css";
import Galaxy from "./routes/galaxy/Galaxy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galaxy" element={<Galaxy />} />
      </Routes>
    </div>
  );
}

export default App;
