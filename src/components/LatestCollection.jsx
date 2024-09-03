import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext.jsx"
import Title from "./Title.jsx"
import ProductItem from "./ProductItem.jsx"


const LatestCollection = () => {
    const [leastProduct,setLeastProduct]=useState([])
    useEffect(()=>{
        setLeastProduct(products.slice(0,10))
    },[])
    const { products }=useContext(ShopContext)
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'LATEST '} text2={'COLLECTIONS'}/>
            <p className="text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>   
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {leastProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
        </div>
    </div>
  )
}

export default LatestCollection

