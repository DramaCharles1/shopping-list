import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingList } from "./pages/ShoppingList";
import { Pantry } from "./pages/Pantry";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router basename="/shopping-list">
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="*" element={<div>404 - Page Not Found lolololo</div>} />
        </Routes>
      </Router>
    </div>
  );
}
