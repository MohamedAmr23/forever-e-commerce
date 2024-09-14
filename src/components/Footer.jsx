import { useContext } from 'react'
import {assetsFront} from '../assets/frontend_assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'
const Footer = () => {
    const {currentMode}=useContext(ShopContext)
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
            <div >
                <img src={assetsFront.logo} className='w-32 mb-5 bg-white'/>
                <p className={`w-full md:w-2/3 ${currentMode==='light'?'text-gray-600':'text-white'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className={`flex flex-col gap-1 ${currentMode==='light'?'text-gray-600 ':'text-white'}`}>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div >
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className={`flex flex-col gap-1  ${currentMode==='light'?'text-gray-600':'text-white'}`}>
                    <li>+1-000-000-0000</li>
                    <li>greatstackdev@gmail.com</li>
                    <li><a target='_blank' href='https://www.facebook.com/profile.php?id=100030906974430'>FaceBook</a></li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ Mohamed Amr - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer