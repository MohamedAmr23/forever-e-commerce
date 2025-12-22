import { Link, NavLink } from 'react-router-dom';
import { assetsFront } from '../../assets/frontend_assets/assets.js';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, setMode, currentMode } = useContext(ShopContext);
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  // Initialize mode on mount if not set
  useEffect(() => {
    if (!currentMode) {
      const savedMode = localStorage.getItem("currentMode") || "light";
      setMode(savedMode);
    }
  }, [currentMode, setMode]);

  // Use theme.palette.mode as fallback if currentMode is not yet initialized
  const effectiveMode = currentMode || theme.palette.mode || "light";

  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'} className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assetsFront.logo} className="w-36 bg-white" alt="" />
      </Link>
      <ul className={`hidden sm:flex gap-5 text-sm ${effectiveMode === "light" ? "text-gray-700" : "text-white"}`}>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>{t('home')}</p> 
          <hr className={`w-1/2 border-none h-[1.5px] hidden ${effectiveMode === "light" ? 'bg-gray-700' : 'bg-white'}`} />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>{t('collection')}</p> 
          <hr className={`w-1/2 border-none h-[1.5px] hidden ${effectiveMode === "light" ? 'bg-gray-700' : 'bg-white'}`} />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>{t('about')}</p> 
          <hr className={`w-1/2 border-none h-[1.5px] hidden ${effectiveMode === "light" ? 'bg-gray-700' : 'bg-white'}`} />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>{t('contact')}</p> 
          <hr className={`w-1/2 border-none h-[1.5px] hidden ${effectiveMode === "light" ? 'bg-gray-700' : 'bg-white'}`} />
        </NavLink>
      </ul>

      <div className={`flex items-center gap-6 cursor-pointer ${effectiveMode === "light" ? "text-gray-700" : "text-white"}`}>
        <img
          src={assetsFront.search_icon}
          onClick={() => setShowSearch(true)}
          className={`w-5 cursor-pointer ${effectiveMode === "light" ? "filter invert-0" : "filter invert"}`}
          alt="Search Icon"
        />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assetsFront.profile_icon}
              className={`w-5 cursor-pointer ${effectiveMode === "light" ? "filter invert-0" : "filter invert"}`}
              alt="Profile Icon"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className={`flex flex-col gap-2 w-36 py-3 px-5 rounded ${effectiveMode === "light" ? "bg-slate-100" : "bg-black"}`}>
              <p className={`cursor-pointer ${effectiveMode === 'light' ? 'hover:text-black' : 'hover:text-white'}`}>{t('myProfile')}</p>
              <p className={`cursor-pointer ${effectiveMode === 'light' ? 'hover:text-black' : 'hover:text-white'}`}>{t('order')}</p>
              <p className={`cursor-pointer ${effectiveMode === 'light' ? 'hover:text-black' : 'hover:text-white'}`}>{t('logout')}</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assetsFront.cart_icon}
            className={`w-5 cursor-pointer ${effectiveMode === "light" ? "filter invert-0" : "filter invert"}`}
            alt="Cart Icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
       
        <img
          onClick={() => setVisible(true)}
          src={assetsFront.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
        {/* Language Toggle Buttons */}
        {i18n.language === 'en' && (
          <button onClick={() => i18n.changeLanguage('ar')} className="py-2 px-4 border rounded">
            العربية
          </button>
        )}
        {i18n.language === 'ar' && (
          <button onClick={() => i18n.changeLanguage('en')} className="py-2 px-4 border rounded">
            English
          </button>
        )}
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center p-3 gap-4 cursor-pointer">
            <img className="h-4 rotate-180" src={assetsFront.dropdown_icon} alt="Dropdown Icon" />
            <p>{t('back')}</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="py-2 pl-6 border">
            {t('home')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6 border">
            {t('collection')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="py-2 pl-6 border">
            {t('about')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 pl-6 border">
            {t('contact')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;