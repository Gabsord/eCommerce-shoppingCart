import React, {useContext, useEffect, useState} from "react";
import FetchApiML from "../../api/FetchApiML";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import './Products.css'
import SearchContext from "../../context/SearchContext";

function Products() {

    const {products,setProducts,} = useContext(SearchContext)
    const[loading, setLoading] = useState(true)


    useEffect(()=>{
       FetchApiML('pc gamer').then((response)=>{setProducts(response)
                                                setLoading(false)})
    },[])

    return(
        (loading ? <Loading /> : <section className="products">
            {
                products.map((product) => {
                    return(
                        <ProductCard data={product} key={product.id} />
                    )
                })
            }
        </section>)
      
       
    )
}

export default Products