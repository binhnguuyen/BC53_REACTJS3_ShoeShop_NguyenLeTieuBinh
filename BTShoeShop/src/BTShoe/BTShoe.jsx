// import React from 'react'

import { CartModal } from "./CartModal"
import { ProductDetailModal } from "./ProductDetailModal"
import { ProductList } from "./ProductList"
import data from "./data.json"

export const BTShoe = () => {
    // console.log('data: ', data);
    return (
    <div className="container mt-3">
        <div className="d-flex justify-content-between">
            <h1>Shoe Shop</h1>

            
        </div>
        <ProductList 
            data={data}
        />
        <ProductDetailModal />
        <CartModal />
        
    </div>
  )
}
