import React from 'react';

import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';

import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    return (
        <section className="carousel-container">
            <p><em>“A room without books is like a body without a soul.”</em></p>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={book1}
                        alt="Book"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={book2}
                        alt="Book"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={book3}
                        alt="Book"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Slider;