import React from "react";
import { logo, admin, cart } from "../assets/index";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-800 bg-white sticky top-0 z-0">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/"><img className="h-[70px] w-[110px]" src={logo} alt="logoImg" /></Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="font-bold text-black cursor-pointer hover:underline underline-offset-2">
              Page
            </li>
            <li className="font-bold text-black cursor-pointer hover:underline underline-offset-2">
              Shop
            </li>
            <li className="font-bold text-black cursor-pointer hover:underline underline-offset-2">
              Home
            </li>
            <li className="font-bold text-black cursor-pointer hover:underline underline-offset-2">
              Element
            </li>
            <li className="font-bold text-black cursor-pointer hover:underline underline-offset-2">
              Blog
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <img className="w-10" src={cart} alt="cart" />
            <img className="w-10" src={admin} alt="admin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
