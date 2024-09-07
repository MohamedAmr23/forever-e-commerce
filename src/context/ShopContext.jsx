import { createContext, useState } from "react";
import {products} from '../assets/frontend_assets/assets.js'
import PropTypes from "prop-types"; 
export const ShopContext=createContext()

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const value={
       products,currency,delivery_fee,
       search,setSearch,showSearch,setShowSearch
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ShopContextProvider
