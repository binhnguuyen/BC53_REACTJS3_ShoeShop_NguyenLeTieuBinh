// import React from 'react'

import { CartModal } from "./CartModal"
import { ProductDetailModal } from "./ProductDetailModal"
import { ProductList } from "./ProductList"
import data from "./data.json"

export const BTShoe = () => {
    console.log('data: ', data);
    return (
    <div>
        BTShoe
        
        <ProductList />
        <ProductDetailModal />
        <CartModal />
    </div>
  )
}
