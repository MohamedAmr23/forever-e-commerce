import { Link, NavLink } from 'react-router-dom'
import {assetsFront} from '../../assets/frontend_assets/assets.js'
import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext.jsx'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from '@mui/material';
const Navbar = () => {
  const [visible,setVisible]=useState(false)
  const {setShowSearch,getCartCount,setMode,currentMode}=useContext(ShopContext)
  const theme=useTheme()
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assetsFront.logo} className="w-36 bg-white" alt="" />
      </Link>
      <ul
        className={`hidden sm:flex gap-5 text-sm ${
          currentMode === "light"
            ? "text-gray-700"
            : 'text-white'
        }`}
      >
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className={`w-1/2 border-none h-[1.5px]  hidden ${ currentMode  === "light"?'bg-gray-700':'bg-white'}`} />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 ">
          <p>COLLECTION</p>
          <hr className={`w-1/2 border-none h-[1.5px]  hidden ${ currentMode  === "light"?'bg-gray-700':'bg-white'}`} />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>ABOUT</p>
          <hr className={`w-1/2 border-none h-[1.5px]  hidden ${ currentMode  === "light"?'bg-gray-700':'bg-white'}`} />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr  className={`w-1/2 border-none h-[1.5px]  hidden ${ currentMode  === "light"?'bg-gray-700':'bg-white'}`} />
        </NavLink>
      </ul>

      <div
        className={`flex items-center gap-6 cursor-pointer ${
          currentMode  === "light"
            ? "text-gray-700"
            : "text-white"
        }`}
      >
        <img
          src={assetsFront.search_icon}
          onClick={() => setShowSearch(true)}
          className={`w-5 cursor-pointer ${
            currentMode  === "light"
              ? "filter invert-0"
              : "filter invert"
          }`}
          alt="Search Icon"
        />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assetsFront.profile_icon}
              className={`w-5 cursor-pointer ${
                localStorage.getItem("currentMode") === "light"
                  ? "filter invert-0"
                  : "filter invert"
              }`}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div
              className={`flex flex-col gap-2 w-36 py-3 px-5  rounded ${
                currentMode   === "light"
                  ? "bg-slate-100 "
                  : "bg-black"
              }`}
            >
              <p className={`cursor-pointer  ${currentMode==='light'?'hover:text-black':'hover:text-white'}`}>MyProfile</p>
              <p className={`cursor-pointer  ${currentMode==='light'?'hover:text-black':'hover:text-white'}`}>Order</p>
              <p className={`cursor-pointer  ${currentMode==='light'?'hover:text-black':'hover:text-white'}`}>Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assetsFront.cart_icon}
            className={`w-5 cursor-pointer ${
              currentMode === "light"
                ? "filter invert-0"
                : "filter invert"
            }`}
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
          />
        ) : (
          <DarkModeOutlinedIcon
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
          />
        )}
        <img
          onClick={() => setVisible(true)}
          src={assetsFront.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3 gap-4 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assetsFront.dropdown_icon} />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar