import Header from "./Components/Header";
import "./styles/app.scss";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Toaster/>
    </Router>
  );
}

export default App;
