import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import {ShopContext} from '../context/ShopContext.jsx'
const SignUp = () => {
  const {submit}=useContext(ShopContext)
  return (
    <form onSubmit={submit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    <div className='flex items-center gap-2'>
      <p className='prata-regular text-3xl'>Sign Up</p>
      <hr className='w-8 h-[1.5px] bg-gray-800 border-none'/>
    </div>
    <input type='text' placeholder='name' className='w-full px-3 py-2 border border-gray-800' required/>
    <input type='email' placeholder='Email' className='w-full px-3 py-2 border border-gray-800' required/>
    <input type='password' placeholder='Password' className='w-full px-3 py-2 border border-gray-800' required/>
    <div className='w-full flex items-center justify-between cursor-pointer text-sm'>
        <p>Forgot your password?</p>
       <Link to='/login'><p>Login here</p></Link> 
    </div>
    <button className='text-center bg-black text-white font-light px-8 py-2 mt-4'>Sign Up</button>
</form>
  )
}

export default SignUp