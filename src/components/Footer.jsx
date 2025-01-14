import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=''>
      <MDBFooter bgColor='dark' className='text-center text-lg-start text-light p-1 mt-3'>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  Ecommerce
                </h6>
                <p>
                  Bringing you the best products at unbeatable prices. Shop now and enjoy exclusive offers.
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
                <p>
                  <Link to='/' className='text-reset'>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to='/Products' className='text-reset'>
                    Products
                  </Link>
                </p>
                <p>
                  <Link to='/Cart' className='text-reset'>
                    Cart
                  </Link>
                </p>
              </MDBCol>


              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  Jipur, Rajasthan, India
                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  ecommerce@gmail.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 1234567890
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2025 Copyright. All rights reserved. |
          <a className='text-reset fw-bold ms-1' href='https://www.linkedin.com/in/harshkumarjangir/' target='_blank'>
            Harsh Kumar Jangir
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer