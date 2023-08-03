import React, { useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { auth } from "./firebase.config";

const App = () => {
  const persistor = persistStore(store);

  if(!auth.currentUser){
    persistor.purge()
  }

  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen" >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart  />} />
              <Route path="/login" element={<Login className="overflow-auto" />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
