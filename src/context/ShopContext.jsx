import { createContext, useEffect, useState } from "react";
import {products} from '../assets/frontend_assets/assets.js'
import PropTypes from "prop-types"; 
import { toast } from "react-toastify";
export const ShopContext=createContext()

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItem,setCartItem]=useState({})

    let cartData=structuredClone(cartItem)
    const addToCart=async(itemId,size)=>{
        if(!size){
            toast.error("Select Product Size")
            return
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }else{
                cartData[itemId][size]=1
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItem(cartData)
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalCount+=cartItem[items][item]
                    }
                }catch(err){
                    console.log(err)
                }
            }
        }
        return totalCount
    }




    const value={
       products,currency,delivery_fee,
       search,setSearch,showSearch,setShowSearch,
       cartItem,addToCart,getCartCount
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
