import React from "react";
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {addToCart} from "../redux/shopSlice"

const ProductCard = ({ product }) => {
  const { image, title, price } = product;

 const dispatch = useDispatch();



  const navigate = useNavigate()
  const ntitle = title.toLowerCase().split(" ").join("")

  const handleClick =()=>{
    navigate(`/product/${ntitle}` , {
      state:{
        item:product,
      }
    })
  }
  return (
    <div>
      <div onClick={handleClick} className="w-full h-96 cursor-pointer">
        <img className="h-full w-full object-cover" src={image} />
      </div>
      <div className="w-full border-[1px] px-2 py-4 flex justify-between">
        <div>{title}</div>
        <div>${price}</div>
        
      </div>
      
    </div>
  );
};

export default ProductCard;
