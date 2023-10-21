import React from 'react'
import { useState } from "react"
import { CartModal } from "./CartModal"
import { ProductDetailModal } from "./ProductDetailModal"
import { ProductList } from "./ProductList"
import data from "./data.json"

export const BTShoe = () => {
    // Xét state và xử lý state thay đổi khi ấn nút Detail
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


    // Xét state và xử lý state thay đổi khi ấn nút Buy
    // Lưu ý: useState ngay đây là 1 cái mảng chứ ko phải obj như trên productDetail
    // lý do là vì trong hàm setCarts đây mình muốn sd findIndex chỉ áp dụng đc cho mảng chứ ko cho obj
    const [carts, setCarts] = useState([
        // giá trị mặc định làm để xem UI phù hợp hay chưa, nếu xong rồi thì xoá đi
        // nếu ko thì khi vừa vào giỏ hàng đã có sẵn 1 sp thì ko đúng logic
        // {
        // id: 1,
        //     name: 'Adidas Prophere',
        //     alias: 'adidas-prophere',
        //     price: 350,
        //     description:
        //         'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        //     shortDescription:
        //         'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        //     quantity: 995, // số tượng hàng tồn kho
        //     image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
        //     // phải thêm số lượng hàng cartQuantity vào trong giỏ nên do ban đầu ko có trong data nên mình phải tự tạo
        //     cartQuantity: 1, // số lượng mua hàng giá trị mặc định là 1
        // }
    ])
    const handleCart = (product) => {
        // sau khi truyền product vào giỏ hàng
        // do mình phải thêm số lượng hàng cartQuantity vào trong giỏ do ko có trong data nên mình phải clone lại xong thêm vào
        // bằng cách spread operator để copy nông lại rồi thêm thuộc tính cartQuantity với giá trị default là 1
        // setCart([...carts, {...product, cartQuantity: 1}])
        // thay vì truyền vào 1 giá trị cụ thể thì mình truyền vào 1 callback
        // giá trị trả về của callback đem đi setState cho mình, nó sẽ trả về giá trị là prevState
        // cái prevState bằng với cái state (carts) hiện tại
        setCarts((prevState) => {
            // kiểm tra trong giỏ hàng có sp đó hay chưa
            // product là cái định truyền vào
            // value là cái hiện tại trong giỏ hàng
            const index = prevState.findIndex((value) => value.id === product.id)
            console.log('index: ', index);

            // copy nông và thêm sán phẩm mới vào product khi ko cần để ý có hàng bên trong giỏ hàng hay ko
            // setCarts([...carts, {...product, cartQuantily :1}])

            
            // Chưa tồn tại trong carts
            // nếu add vào mà ra số lượng 2 thì là do nó đang hach code? binding động sẽ giải quyết đc
            if (index === -1) {
                prevState.push({ ...product, cartQuantity: 1 })
            } else {
                // Đã tồn tại trong carts
                prevState[index].cartQuantity += 1
            }
            // sao phải return về 1 mảng mới???
            // mảng là 1 giá trị tham chiếu ko tồn tại thực tế
            // cái mảng này đc lưu với dạng ô nhớ
            // cái ô nhớ đó có giá trị là 1 mảng
            // khi tạo ra biến có giá trị là tham chiếu thì nó chỉ địa chỉ ô nhớ
            // khi return cái prevState thì nó chỉ trả về địa chỉ của ô nhớ đó chứ ko phải nội dung bên trong đó
            // nên mình phải return về 1 mảng mới
            // return về cái gì thì nó sẽ đem giá trị đó đem đi set lại state cho mình trong setCarts
            return [...prevState]
            
        })
    }

    const handleCartQuantity = (productId, quantity) => {
        setCarts((prevState) => {
            const index = prevState.findIndex((value) => value.id === productId)
            // biểu thức sau đây nghĩa là nếu cái số lượng trả về 0 tức là falsy thì nó sẽ lấy giá trị là 1
            prevState[index].cartQuantity = prevState[index].cartQuantity + quantity || 1
            return[...prevState]
        })
    }

    const deleteCart = (productId) => {
        // prevState cũng tương đương với state hiện tại thôi nhưng sau khi mình setSate nó trả lại cái này nên đặt là prevState
        setCarts((prevState) => {
            return prevState.filter((value => value.id !== productId))
        })
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
                handleCart = {handleCart}
            />
            <ProductDetailModal 
                productDetail = {productDetail}
            />
            <CartModal 
                carts = {carts}
                handleCartQuantity = {handleCartQuantity}
                deleteCart = {deleteCart}
            />

        </div>
    )
}
