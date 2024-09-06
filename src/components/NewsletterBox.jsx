import  { useEffect, useRef } from 'react'

const NewsletterBox = () => {
    const subsribe=useRef()
    useEffect(()=>{
        subsribe.current.focus()
    })
    const formHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='flex flex-col gap-3 justify-center items-center py-10 text-center'>
        <p className='text-gray-800 text-2xl font-medium'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={formHandler} className='w-full sm:w-1/2 gap-3 mx-auto my-6 border pl-3 flex items-center' >
            <input type='email' placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none rounded' ref={subsribe}  required/>
            <button type='submit' className='flex bg-black text-white text-xs py-4 px-10 rounded-tr rounded-br '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox