import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import RelatedProducts from '../components/RelatedProducts.jsx'

const Product = () => {
  const {products,currency,addToCart}=useContext(ShopContext)
  const {productId}=useParams()
  const [productData,setProductData]=useState(false)
  const [image,setImage]=useState('')
  const [size,setSize]=useState('')


  const fetchProductData=async()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

   useEffect(()=>{
    fetchProductData()
   },[products,productId])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div  className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item,index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                  ))
                }
            </div>
            <div  className='w-full sm:w-[80%]'>
                <img src={image} alt='' className='w-full h-auto'/>
            </div>
          </div>
      {/* product information */}
          <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className=' flex items-center gap-1 mt-2'>
                  <img src={assetsFront.star_icon} alt="" className='w-3 5' />
                  <img src={assetsFront.star_icon} alt="" className='w-3 5' />
                  <img src={assetsFront.star_icon} alt="" className='w-3 5' />
                  <img src={assetsFront.star_icon} alt="" className='w-3 5' />
                  <img src={assetsFront.star_dull_icon} alt="" className='w-3 5' />
                  <p className='pl-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                      {
                        productData.sizes.map((item,index)=>(
                          <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${size===item?'border-orange-500':''}`}>{item}</button>
                        ))
                      }
                  </div>
                </div>
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                      <p>100% Original product.</p>
                      <p>Cash on delivery is available on this product.</p>
                      <p>Easy return and exchange policy within 7 days.</p>
                </div>
          </div>
      </div>
      {/*describtion and review */}
      <div className='mt-20'>
        <div className='flex  items-center'>
          <h1 className= 'border px-5 py-3 text-sm font-bold'>Description</h1>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>
      {/* best seller */}
      
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product