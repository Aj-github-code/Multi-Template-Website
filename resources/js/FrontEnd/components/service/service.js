import React, { Component } from "react";
import './service.css';

class Service extends Component {
    render() {
        if (!this.props.data) return null;
        const services = this.props.data;
        console.log(services);
        return (
            <section className="section-3">
                <div className="sec-3hdiv-jk">
                    <h1 className="sec-3jk"><span>OUR SERVICES</span></h1>
                    <p className="sec-3jk-p">Your one stop for all your Two wheelers needs</p>
                </div>
                <div className="">
                    <div className="container-fluid">
                        <div className="row">
                            {services.map((item ,key) => (
                                <div className="col-md-4" key={key}>
                                    <div className="card mb-3 mb3-jk">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={item.icon} className="img-fluid rounded-start card-img-jk" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body card-body-md3">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text crd-jk">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            ))}
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}

export default Service;