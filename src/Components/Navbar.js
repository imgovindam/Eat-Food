import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SystemUpdateAltSharpIcon from "@mui/icons-material/SystemUpdateAltSharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
// import
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <DensityMediumIcon size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text[14px]">
          <p className="bg-black text-white rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <SearchIcon size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search foods"
        ></input>
      </div>
      {/* card button */}
      <button className="bg-black text-white hidden  md:flex items-center py-2 rounded-full">
        <ShoppingCartIcon size={20} className="mr-2" /> cart
      </button>
      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-transparent fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        " "
      )}
      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <CloseIcon
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <LocalShippingIcon size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <FavoriteSharpIcon size={25} className="mr-4" />
              Favourite
            </li>
            <li className="text-xl py-4 flex">
              <AccountBalanceWalletSharpIcon size={25} className="mr-4" />{" "}
              wallet
            </li>
            <li className="text-xl py-4 flex">
              <HelpSharpIcon size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <LocalOfferSharpIcon size={25} className="mr-4" />
              Promotion
            </li>
            <li className="text-xl py-4 flex">
              <SystemUpdateAltSharpIcon size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <PeopleAltSharpIcon size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
