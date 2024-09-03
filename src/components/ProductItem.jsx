import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"; // Import PropTypes
import { ShopContext } from '../context/ShopContext.jsx'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}
ProductItem.propTypes = {
    id: PropTypes.node.isRequired,
    image:PropTypes.node.isRequired,
    name:PropTypes.node.isRequired,
    price:PropTypes.node.isRequired
  };
export default ProductItem