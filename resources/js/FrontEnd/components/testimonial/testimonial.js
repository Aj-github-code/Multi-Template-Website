import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './testimonial.css';

class Testimonials extends Component {
    render() {
        if (!this.props.data) return null;
        const data = this.props.data;
        return (
            <section className="section-6">
                <section className="testimonial text-center">
                    <div className="container">
                        <div className="heading white-heading">
                            Testimonial
                        </div>
                        <Carousel>
                            {data.map(item => (
                                <Carousel.Item key={item.id}>
                                    <div className="testimonial4_slide">
                                        <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
                                        <p>{item.testimonial}</p>
                                        <h4>{item.client}</h4>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            </section>
        );
    }
}

export default Testimonials;