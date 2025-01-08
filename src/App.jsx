import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import ListOf from "./ListOf";
import Corfu from "./Corfu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/listOf" element={<ListOf />} />
        <Route path="/corfu" element={<Corfu />} />
      </Routes>
    </Router>
  );
}

export default App;
