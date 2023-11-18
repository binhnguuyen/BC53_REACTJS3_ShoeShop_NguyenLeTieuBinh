// import React from 'react'

export const CartModal = ({ carts, handleCartQuantity, deleteCart, paymentInCart }) => {
  // bóc tách trực tiếp
  // const {carts} = props

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Cart
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* nếu carts rỗng: falsy */}
            <h5 id='paymentSuccess' className='d-none text-danger'>Bạn đã thanh toán thành công</h5>
            {
              !carts.length &&
              <h2> Vui lòng chọn sản phẩm</h2>
            }
            {/* nếu carts có sản phẩm: falsy của falsy là true */}
            {/* nếu ko có !! thì nó sẽ thêm số 0 vào */}
            {!!carts.length && (
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    {/* <th>Descripttion</th> */}
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((value, index) => {
                    // map thì phải có return
                    return (
                      // map thì phải truyền key vào
                      <tr key={value.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            style={{
                              width: 80,
                            }}
                            src={value.image}
                            alt="..."
                          />
                        </td>
                        <td>{value.name}</td>
                        {/* <td>
                          <p
                            style={{
                              maxWidth: 250,
                            }}
                          >
                            {value.description}
                          </p>
                        </td> */}
                        <td>{value.price}</td>
                        <td>
                          <button
                            className="btn btn-outline-success"
                            style={{
                              height: 40,
                              width: 40,
                            }}
                            onClick={() => handleCartQuantity(value.id, 1)}
                          >
                            +
                          </button>
                          <p className="m-2">{value.cartQuantity}</p>
                          <button
                            className="btn btn-outline-danger"
                            style={{
                              height: 40,
                              width: 40,
                            }}
                            onClick={() => handleCartQuantity(value.id, -1)}
                          >
                            -
                          </button>
                        </td>
                        <td>{value.cartQuantity * value.price}</td>
                        <td>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => deleteCart(value.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            )}
            <div className="d-flex">
              {
                carts.length &&
                <button
                  className="btn btn-success col-12 ms-auto"
                  style={{
                    width: 70,
                  }}
                  onClick={() => paymentInCart()}
                >
                  Buy
                </button>
              }

            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

// falsy: 0, "", NaN, undefined, null, false => trả về false
// !! là quy đối giá trị ra boolean
// !carts.length là false, tức mảng rỗng
// !!carts.length là true