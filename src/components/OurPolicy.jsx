
import { useContext } from 'react'
import {assetsFront} from '../assets/frontend_assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'
const OurPolicy = () => {
  const {currentMode}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-gray-700 text-xs sm:text-sm md:text-base items-center my-10 mt-24'>
        <div className='flex flex-col gap-2 text-center items-center m-auto'>
            <img src={assetsFront.exchange_icon}  alt='' className={`w-12 mb-5 ${currentMode==='light'?'filter invert-0':'filter invert'}`}/>
            <h3 className={`${currentMode==='light'?'text-black':'text-white'} font-semibold`}>Easy Exchange Policy</h3>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center m-auto'>
            <img src={assetsFront.quality_icon}  alt='' className='w-12 mb-5'/>
            <h3 className={`${currentMode==='light'?'text-black':'text-white'} font-semibold`}>7 Days Return Policy</h3>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center m-auto'>
            <img src={assetsFront.support_img}  alt='' className={`w-12 mb-5 ${currentMode==='light'?'filter invert-0':'filter invert'}`}/>
            <h3 className={`${currentMode==='light'?'text-black':'text-white'} font-semibold`}>Best customer support</h3>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy