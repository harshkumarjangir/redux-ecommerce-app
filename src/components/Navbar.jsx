import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/cartSlice'



const Navbar = () => {

    const dispatch = useDispatch()

    const { cart, totalQuantity } = useSelector((state) => (state.allCart))

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])


    return (
        <div id='navbar'>
            <nav className="navbar navbar-expand-lg" style={{ boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, .2)" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ecommerce</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Products</NavLink>
                            </li>
                        </ul>
                    </div>

                    <Link to="/Cart">
                        <MDBBtn className='mx-2' color='dark'>
                            <MDBIcon className='me-2' fas icon="shopping-cart" />
                            Cart ( {totalQuantity} )
                        </MDBBtn>
                    </Link>

                </div>
            </nav>

        </div>
    )
}

export default Navbar