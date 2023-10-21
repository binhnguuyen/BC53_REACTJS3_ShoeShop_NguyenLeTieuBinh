// import React from 'react'

import { useState } from "react"
import { CartModal } from "./CartModal"
import { ProductDetailModal } from "./ProductDetailModal"
import { ProductList } from "./ProductList"
import data from "./data.json"

export const BTShoe = () => {
    
    const [productDetail, setProductdetail] = useState({
        // state default nếu ko có sự thay đổi state
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

    const handleProductDetail = (product) => {
        setProductdetail(product)
    }

    const [carts, setCarts] = useState({
        id: 1,
            name: 'Adidas Prophere',
            alias: 'adidas-prophere',
            price: 350,
            description:
                'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
            shortDescription:
                'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
            quantity: 995, // số tượng hàng tồn kho
            image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
            // cái này do ban đầu ko có trong data nên mình phải tự tạo
            cartQuantity: 1, // số lượng mua hàng
    })

    const handleCarts = (product) => {
        setCarts(product)
    }
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>Shoe Shop</h1>
                <p 
                    className="fs-3"
                    style={{
                        // khi chỉ chuột vào hiện ra bàn tay
                        cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                >
                    Giỏ hàng
                    <i className="fa-solid fa-cart-plus me-2"></i>
                </p>

            </div>
            {/* do setSate đang nằm bên ProductItem nên mình phải truyền hàm handleProductDetail xuống cho ProductItem cho nó setState, gián tiếp qua component ProductList, tất nhiên bên ProductList phải truyền thêm lần nữa mới qua đc ProdcuctItem */}
            {/* Cái handleProductDetail là cái props, cái handleProductDetail thứ 2 mới là hàm đc truyền vào props để thông qua props mà truyền xuống component muốn truyền */}
            {/* ở đây có 2 props là data và handleProductDetail */}
            <ProductList
                data={data}
                handleProductDetail = {handleProductDetail}
            />
            <ProductDetailModal 
                productDetail={productDetail}
            />
            <CartModal 
                carts={carts}
            />

        </div>
    )
}
