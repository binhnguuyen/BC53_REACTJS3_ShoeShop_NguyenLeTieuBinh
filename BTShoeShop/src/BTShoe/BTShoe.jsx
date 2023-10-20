// import React from 'react'

import { useState } from "react"
import { CartModal } from "./CartModal"
import { ProductDetailModal } from "./ProductDetailModal"
import { ProductList } from "./ProductList"
import data from "./data.json"

export const BTShoe = () => {
    
    const [productDetail, setProductdetail] = useState({
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        price: 350,
        description:
            'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
            'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        quantity: 995,
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
    })
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>Shoe Shop</h1>


            </div>
            <ProductList
                data={data}
            />
            <ProductDetailModal 
                productDetail={productDetail}
            />
            <CartModal />

        </div>
    )
}
