import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const data = useSelector((store) => store.Shop.productData);
  const [total, settotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, [data]);

  function calculateTotal() {
    let amt = 0;
    data.map((item) => {
      amt += item.price * item.Quantity;
    });
    settotal(amt);
  }

  return data.length > 0 ? (
    <div>
      <div className="max-w-screen-xl  mx-auto py-20 flex">
        <CartItem />

        {/* paymetn cart */}
        <div className="w-1/3 bg-slate-300 mt-14 pt-4 pb-12 px-4 h-max ml-5 ">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 py-4">
            <h2 className="text-2xl underline underline-offset-4">
              Cart Total
            </h2>
            <p className="text-l font-medium flex items-center gap-6">
              SubTotal <span>${total}</span>
            </p>
            <p className="text-l font-medium flex items-start gap-6">
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit amet consecteturpellat quo nostrum dolorum
                cum placeat asperiores facilis suscipit error amet?
              </span>
            </p>
          </div>
          <p className="text-l font-medium flex justify-between mt-2">
            SubTotal <span className="text-lg font-bold">${total}</span>
          </p>
          <button
            onClick={() => {
              if (!auth.currentUser) {
                const timer = setTimeout(() => {
                  navigate("/login");
                }, 250);
                return () => clearInterval(timer);
              }
            }}
            className="w-full bg-black text-white h-14 mt-4"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className=" flex flex-col">
      <div className="flex items-center justify-center  flex-grow">
        <div className="w-1/3 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 py-4">
            <h1 className="text-xl font-bold text-center">
              YOUR CART IS EMPTY
            </h1>
            <Link to="/">
              <p className=" text-center mt-4 text-blue-600 font-bold text-lg">
                {"<----  "}Go To Shopping
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;
