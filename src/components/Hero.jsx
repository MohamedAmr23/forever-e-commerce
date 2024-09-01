import {assetsFront} from '../assets/frontend_assets/assets.js'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row  items-center border border-gray-400'>
      <div className='flex flex-col w-full sm:w-1/2 gap-2 items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] '>
          
          <div className='flex items-center gap-2 '>
              <p className='bg-[#414141] h-[2px] w-8 md:w-11 '></p>
              <p className='font-medium text-sm md:text-base '>OUR BESTSELLERS</p>
            </div>

          
              <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Latest Arrivals</h1>
            

            <div className='flex items-center gap-2'>
            <p className=' font-medium text-sm md:text-base'>SHOP NOW</p>
            <p className='bg-[#414141] h-[1px] w-10 '></p>
            </div>
        </div>
      </div>
      <img src={assetsFront.hero_img} alt='' className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero