// import React from 'react'

import { ProductItem } from "./ProductItem"

export const ProductList = (props) => {
    const {data} = props
  return (
    <div className="row">
        {/* ở map đầu tiên nó sẽ truyền xuống data của product đầu tiên, rồi thứ 2, thứ 3... */}
        {data.map((product) => {
            return (
                // Ở component ProductList phải truyền hàm handleProductDetail để hiện detail khi ấn vào nút Detail, hàm  handleCart để hiện giỏ hàng khi ấn vào nút Buy, cho component ProductItem
                <ProductItem 
                    key = {product.id}
                    product = {product}
                />
            )
        })}
    </div>
  )
}
