import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../features/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()

  const { cart, totalQuantity, totalPrice } = useSelector((state) => (state.allCart))

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart -{cart.length} items</h5>
                </div>
                <div className="card-body">

                  {

                    cart.map((data, id) => (

                      <div key={id} className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* Image */}
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={data.img} className="w-100" alt="Blue Jeans Jacket" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                            </a>
                          </div>
                          {/* Image */}
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* Data */}
                          <p><strong>{data.title}</strong></p>
                          {/* <p>Color: blue</p> */}
                          <p>Category: {data.category}</p>
                          {/* <p>Size: M</p> */}
                          {/* onClick={()=>dispatch(removeItem(data.id))} */}
                          <button onClick={() => { dispatch(removeItem(data.id)) }} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
                            <i className="fas fa-trash me-2" />
                            Remove
                          </button>

                          {/* Data */}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                            <button onClick={() => { if (data.quantity > 1) { dispatch(decreaseItemQuantity(data.id)) } }} data-mdb-button-init data-mdb-ripple-init className="btn btn-dark px-3 me-2">
                              <i className="fas fa-minus" />
                            </button>
                            <div data-mdb-input-init className="form-floating form-outline">
                              <input id="floatingInput" placeholder='Quantity' min={0} name="quantity" value={data.quantity} type="number" className="form-control" />
                              <label className="" htmlFor="floatingInput">Quantity</label>
                            </div>
                            <button onClick={() => { dispatch(increaseItemQuantity(data.id)) }} data-mdb-button-init data-mdb-ripple-init className="btn btn-dark px-3 ms-2">
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          {/* Quantity */}
                          {/* Price */}
                          <p className="text-start text-md-center">
                            <strong>${data.price}</strong>
                          </p>
                          {/* Price */}
                        </div>

                        <hr className="my-4" />

                      </div>

                    ))

                  }

                  {/* <hr className="my-4" /> */}

                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Price</strong>
                        {/* <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong> */}
                      </div>
                      <span><strong>${totalPrice}</strong></span>
                    </li>
                  </ul>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Cart