import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingList } from "./pages/ShoppingList";
import { Pantry } from "./pages/Pantry";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={ShoppingList} path="/shopping-list" />
          <Route Component={Pantry} path="/pantry" />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
