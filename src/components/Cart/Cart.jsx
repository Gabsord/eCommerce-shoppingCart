import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import './Cart.css'
import SearchContext from "../../context/SearchContext";
import FormatCurrency from "../../utils/FormatCurrency";


function Cart(){

    const {cartItens} = useContext(SearchContext)
    const {openCart , setOpenCart} = useContext(SearchContext)

    const totalPrice = cartItens.reduce((acc,item) => {
        return acc += item.price
    }, 0)


    return(
        <section className={`cart ${openCart ? 'cart-active' : ''}`}>
            <div className="cartProducts">
                {
                    cartItens.map((cartItem)=>{
                        return( <CartItem data={cartItem}/>)
                    })
                }
               
            </div>

            <div className="cartResume">
                <h3>Valor da compra:</h3>
                <h2>{FormatCurrency(totalPrice,'BRL')}</h2>
                 
            </div>

        </section>

    )

}

export default Cart