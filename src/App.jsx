import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import ListOf from "./ListOf";
import Corfu from "./Corfu";
import Zakynthos from "./Zakynthos";
import Rome from "./Rome";
import Prague from "./Prague";
import Budapest from "./Budapest";
import Sicily from "./Sicily";
import Barcelona from "./Barcelona";
import Budva from "./Budva";
import GranCanaria from "./GranCanaria";
import Istanbul from "./Istanbul";
import Bodrum from "./Bodrum";
import Hurghada from "./Hurhada";
import CartProvider from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/listOf" element={<ListOf />} />
          <Route path="/corfu" element={<Corfu />} />
          <Route path="/zakynthos" element={<Zakynthos />} />
          <Route path="/rome" element={<Rome />} />
          <Route path="/prague" element={<Prague />} />
          <Route path="/budapest" element={<Budapest />} />
          <Route path="/sicily" element={<Sicily />} />
          <Route path="/barcelona" element={<Barcelona />} />
          <Route path="/budva" element={<Budva />} />
          <Route path="/grancanaria" element={<GranCanaria />} />
          <Route path="/istanbul" element={<Istanbul />} />
          <Route path="/bodrum" element={<Bodrum />} />
          <Route path="/hurghada" element={<Hurghada />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
