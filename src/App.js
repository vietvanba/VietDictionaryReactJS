import { BrowserRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import { HomePage } from "./components/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
