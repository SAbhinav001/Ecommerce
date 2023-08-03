import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {

  const notify = () => toast.success("Successfully Added");

  const location = useLocation();
  const [productdetail, setProductDetail] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    const detail = { ...productdetail, Quantity: 1 };
    dispatch(addToCart(detail));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const { state } = location;
    setProductDetail(state?.item);
  }, []);

  return (
    <div className="pb-10">
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 ">
          <img
            className="w-full h-[550px] object-cover"
            src={productdetail.image}
          />
        </div>
        <div className="w-3/5">
          <div>
            <h2 className="text-4xl font-semibold">{productdetail.title}</h2>
          </div>
          <div className="w-full  px-2 py-5 flex justify-between">
            <div className="text-2xl font-bold">${productdetail.price}</div>
          </div>
          <div className="flex items-center gap-2 text-base pt-7">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-l text-gray-500">(5 Customer review)</p>
          </div>
          <p className="text-l mt-6 text-gray-500">
            {productdetail.description}
          </p>
          <div className="mt-12 flex gap-4">
           
              <button
                onClick={() => {
                  handleAddtoCart();
            notify()
                }}
                className="w-56 gap-4 border p-5 bg-black text-white"
              >
                Add To Cart
              </button>
    
            <div></div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;
