import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Login from "./routes/Login";
import About from "./routes/About";
import Menu from "./routes/Menu";
import OrderOnline from "./routes/OrderOnline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
      </Routes>
    </>
  );
}

export default App;
