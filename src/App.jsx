import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import Inbox from "./pages/Inbox";
import OrderLists from "./pages/OrderLists";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/orders" element={<OrderLists />} />
      </Routes>
    </HashRouter>
  );
}
