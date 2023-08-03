import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { IncreaseQuantity, DecreseQuantity,clearitem ,reset} from "../redux/shopSlice";

const CartItem = () => {
  const data = useSelector((store) => store.Shop.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 pr-10">
          <div className="w-full">
            <h2 className="font-bold text-2xl">Your Cart</h2>
          </div>
          <div>
            {data.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex items-center justify-between gap-6 mt-6"
                >
                  <div className="flex items-center gap-2">
                    <MdOutlineClose onClick={()=>dispatch(clearitem(item._id))} className="text-xl hover:text-red-600 cursor-pointer" />
                    <img className="h-32 w-32 object-cover" src={item.image} />
                  </div>
                  <h2 className="w-52">{item.title}</h2>
                  <p className="w-10">${item.price}</p>
                  <div className="w-60 flex justify-center text-gray-500 gap-4 border p-5">
                    <h3 className=" font-bold">Quantity</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <button onClick={() => {
                        {item.Quantity >1 && dispatch(DecreseQuantity(item._id))}
                        }} className="border px-4 h-7 hover:bg-gray-600 hover:text-white">
                        -
                      </button>
                      <span>{item.Quantity}</span>
                      <button
                        onClick={() => {
                          {item.Quantity <10 && dispatch(IncreaseQuantity(item._id));}
                        }}
                        className="border px-4 h-7 hover:bg-gray-600 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>${item.Quantity * item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
    </div>
  );
};

export default CartItem;
