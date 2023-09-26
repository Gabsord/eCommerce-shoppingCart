import React, {useContext} from "react";
import SearchContext from "../../context/SearchContext";
import './CartButton.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'




function CartButton() {

const {cartItens} = useContext(SearchContext)
const {openCart , setOpenCart} = useContext(SearchContext)

const OpenCloseCart = () => {setOpenCart(!openCart) 
    
console.log(openCart);}


    return(

        <button 
        className="cart-button"
        onClick={OpenCloseCart} 
        >
              <AiOutlineShoppingCart/>
              {cartItens.length >0 ? <span className="cart-counter">
                {cartItens.length} </span> : '' }
             
            </button> 

    )
}

export default CartButton