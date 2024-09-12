import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'

const CartTotal = () => {
    const {currency,delivery_fee,getCartMount}=useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART '} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartMount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <p>{currency}{getCartMount()=== 0 ? 0 : getCartMount() + delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal