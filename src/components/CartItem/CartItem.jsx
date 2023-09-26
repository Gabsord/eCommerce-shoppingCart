import React, { useContext } from "react";
import {BsCartXFill} from 'react-icons/bs'
import './CartItem.css'
import FormatCurrency from "../../utils/FormatCurrency";
import SearchContext from "../../context/SearchContext";

function CartItem({data}){

    const {id, thumbnail, title, price} = data
    const {cartItens, setCartItens} = useContext(SearchContext)

    const deleteItem = () => {
        const updatedCartItens = cartItens.filter((item) => item.id != id)
        setCartItens(updatedCartItens)
    }

    return(
        <section className="cartItem">
            <img className="productImg" src={thumbnail} alt="productIMG" />
       

            <div className="porductInfo">
                <h5 className="productTitle">{title}</h5>
                <h4 className="productPrice">{FormatCurrency(price, 'BRL')}</h4>
                <button
                onClick={deleteItem} 
                className="deleteBtn"
                >
                <BsCartXFill />
                </button>
            </div>

        </section>

    )
}

export default CartItem