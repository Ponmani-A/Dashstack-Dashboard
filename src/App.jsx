import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import Inbox from "./pages/Inbox";
import OrderLists from "./pages/OrderLists";
import ProductStock from "./pages/ProductStock";
import Pricing from "./pages/Pricing";
import Calendar from "./pages/Calendar";
import TodoList from "./pages/TodoList";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import UIElements from "./pages/UIElements";
import Team from "./pages/Team";
import Table from "./pages/Table";
import Login from "./pages/Login";
import AddTeamMember from "./pages/AddTeamMember";
import NotFound from "./pages/NotFound";
import AddContact from "./pages/AddContact";
import AddEvent from "./pages/AddEvent";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Signup />} />{" "}
        <Route path="/Login" element={<Login />} />{" "}
        <Route path="/Dashboard" element={<Dashboard />} />{" "}
        <Route path="/favorites" element={<Favorites />} />{" "}
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/inbox" element={<Inbox />} />{" "}
        <Route path="/orders" element={<OrderLists />} />{" "}
        <Route path="/stock" element={<ProductStock />} />{" "}
        <Route path="/pricing" element={<Pricing />} />{" "}
        <Route path="/calender" element={<Calendar />} />{" "}
        <Route path="/todo" element={<TodoList />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/invoice" element={<Invoice />} />{" "}
        <Route path="/ui-elements" element={<UIElements />} />{" "}
        <Route path="/team" element={<Team />} />{" "}
        <Route path="/table" element={<Table />} />{" "}
        <Route path="/add-team-member" element={<AddTeamMember />} />{" "}
        <Route path="/add-contact" element={<AddContact />} />{" "}
        <Route path="/calendar/add-event" element={<AddEvent />} />{" "}
        <Route path="/settings" element={<Settings />} />{" "}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
