import React, { useState } from 'react'
// import productData from '../productData.js'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBIcon,
  MDBTypography,
  MDBInput
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../features/cartSlice';


const Products = () => {

  const dispatch = useDispatch()

  const item = useSelector((state) => (state.allCart.items))

  const [inputText, setInputText] = useState("")

  const handleInput = (e) => {
    setInputText(e.target.value.toLowerCase())
  }

  return (
    <div>
      <div className="container">

        <MDBInput onChange={handleInput} value={inputText} className='form-control rounded p-2 mt-4' label="Search Products... " id="form1" type="search" />

        <h2 className='text-center p-4 text-decoration-underline'>All Products</h2>
        <div className="row">
          {
            item
              .filter((el) => el && el.title && el.title.toLowerCase().includes(inputText))
              .map((items, id) => (
                <div key={id} className="col-md-4 my-2">
                  <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' /> */}
                      <MDBCardImage id='pro-image' src={items.img} fluid className="img-thumbnail img-fluid rounded" alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center">
                        <MDBCardTitle>{items.title}</MDBCardTitle>
                        <MDBTypography tag='span' className='fw-bold border px-2 py-1 rounded text-primary'>$ {items.price}</MDBTypography>
                        {/* <span className='border px-2 py-1 rounded bg-secondary fs'>$ {items.price}</span> */}
                      </div>
                      <MDBCardText>
                        {items.description}
                      </MDBCardText>
                      <MDBBtn onClick={() => { dispatch(addtocart(items)) }} className='w-100 d-inline-block' color='dark'>
                        <MDBIcon className='me-2' fas icon="cart-plus" />
                        Add To Cart
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              ))

          }
        </div>
      </div>
    </div>
  )
}

export default Products