import React, { useState } from "react";
import SearchContext from "./SearchContext";

function Provider({children}) {

    const [products, setProducts] = useState ([])
    const [cartItens , setCartItens] = useState([])
    const [openCart , setOpenCart] = useState(false)

    const data = {
        products,
        setProducts,
        cartItens , 
        setCartItens,
        openCart , 
        setOpenCart, 
        
    } 


    return(
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>

    ) 
}

export default Provider