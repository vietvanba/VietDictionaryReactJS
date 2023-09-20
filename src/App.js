import { BrowserRouter, Route, Link, NavLink, Routes} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login"
import NotFound from "./components/NotFound"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;