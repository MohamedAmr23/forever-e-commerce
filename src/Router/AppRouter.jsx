import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Collection from '../pages/Collection.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'
import Login from '../pages/Login.jsx'
import PlaceOrder from '../pages/PlaceOrder.jsx'
import Orders from '../pages/Orders.jsx'
import MainLayout from "../components/MainLayout.jsx/MainLayout.jsx";
const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:1,
                element:<Home/>
            },{
                path:"collection",
                element:<Collection/>
            },{
                path:"about",
                element:<About/>
            },{
                path:"contact",
                element:<Contact/>
            },{
                path:"product/:productId",
                element:<Product/>
            },{
                path:"cart",
                element:<Cart/>
            },{
                path:"login",
                element:<Login/>
            },{
                path:"place-order",
                element:<PlaceOrder/>
            },{
                path:"orders",
                element:<Orders/>
            }
            
        ]
    }
])

const AppRouter = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <RouterProvider router={router}/>
        </div>

    )
  }
  
  export default AppRouter