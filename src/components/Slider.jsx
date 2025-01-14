import React from 'react'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

const Slider = () => {
    return (
        <div>
            <MDBCarousel showControls showIndicators dark fade>
                <MDBCarouselItem itemId={1}>
                    <img src='/slider/slider1.png' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Explore Cutting-Edge Tech</h5>
                        <p>Upgrade your lifestyle with the latest gadgets and accessories.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='/slider/slider2.png' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Transform Your Space</h5>
                        <p>Discover stylish home products designed for comfort and elegance.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='/slider/slider3.png' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Embrace Your Fitness Journey</h5>
                        <p>Stay active and healthy with premium fitness essentials.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Slider