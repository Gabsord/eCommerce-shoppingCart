import React, { useContext } from "react";
import propTypes from "prop-types"
import './ProductCard.css'
import {BsFillCartPlusFill} from 'react-icons/bs'
import FormatCurrency from "../../utils/FormatCurrency";
import SearchContext from "../../context/SearchContext";


function ProductCard({data}) {
    const {thumbnail, price, title} = data
    const {cartItens, setCartItens} = useContext(SearchContext)

    

    function AddCart() {
        setCartItens([...cartItens,data])
        console.log(cartItens);
      
    }


    return(

        <div className="Product-card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />

            <div className="product-infos">

                <h2 className="product-price">{FormatCurrency(price, 'BRL')}</h2>
                <h3 className="product-title">{title}</h3>
               
            </div>

            <button onClick={AddCart} className="Add-cartBtn">
                <BsFillCartPlusFill/>
            </button>

        
        </div>

    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired