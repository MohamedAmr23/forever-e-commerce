
import Title from '../components/Title.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
const Contact = () => {
  const{currentMode}=useContext(ShopContext)
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img src={assetsFront.contact_img} alt='' className='w-full sm:w-[480px]'/>
        <div className='flex flex-col gap-6 justify-center items-start' >
            <b className={`font-semibold text-xl  ${currentMode==='light'?'text-gray-600':'text-gray-200'}`}>Our Store</b>
            <p className={`${currentMode==='light'?'text-gray-500':'text-gray-100'}`}>54709 Willms Station <br/>Suite 350, Washington, USA</p>
            <p className={`${currentMode==='light'?'text-gray-500':'text-gray-100'}`}>54709 Willms Station<br/> Suite 350, Washington, USA</p>
            <b className={`font-semibold text-xl  ${currentMode==='light'?'text-gray-600':'text-gray-200'}`}>Careers at Forever</b>
            <p className={`${currentMode==='light'?'text-gray-500':'text-gray-100'}`}>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  
  )
}

export default Contact