import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Banner extends Component {
    render() {
        if (!this.props.data) return null;
        const slideData = this.props.data;
        console.log(slideData);
        return (
            <Carousel>
                {slideData.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={item.image ? item.image : item.url}
                            alt={item.title1 ? item.title1 : item.title}
                        />
                    </Carousel.Item>
                ))}

            </Carousel>
        );
    }
}

export default Banner;