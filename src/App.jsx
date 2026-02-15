import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/styles/StartScreen.css";
import "./assets/styles/OrderType.css";
import "./assets/styles/Carousel.css";
import "./assets/styles/CardProduct.css";
import "./assets/styles/CartMenu.css";
import Layout from "./components/layout/layout.jsx";
import Start from "./components/layout/StartScreen.jsx";
import OrderType from "./components/layout/OrderType.jsx";
import Menu from "./pages/Menu.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Start />} />
          <Route path="/order-type" element={<OrderType />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success/:id" element={<OrderSuccess />} />
        </Route>
        <Route path="*" element={<Navigate to="/ " replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
