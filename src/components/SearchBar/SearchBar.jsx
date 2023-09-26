import React, {useState, useContext} from "react";
import './SearchBar.css'
import {BsSearch} from 'react-icons/bs'
import FetchApiML from "../../api/FetchApiML";
import SearchContext from "../../context/SearchContext";


function SearchBar(){

  
const [searchValue, setSearchValue] = useState('')

const {setProducts} = useContext(SearchContext)


const handleSearch = async (event) => {
    setSearchValue('')
    event.preventDefault()
    const products = await FetchApiML(searchValue)
    setProducts(products)
}

    return(
        <div className="searchBar">
            <form className="form"  onSubmit={handleSearch}>
   
                <input 

                value={searchValue}
                type="search" 
                placeholder="Busque um produto" 
                className="input-search"
                required
                onChange={({target}) => {setSearchValue(target.value)}} />
 
                <button className="button-search">
                    <BsSearch/>

                </button>
            </form>
      </div>
    )
}

export default SearchBar