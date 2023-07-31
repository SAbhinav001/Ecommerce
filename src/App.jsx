import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
