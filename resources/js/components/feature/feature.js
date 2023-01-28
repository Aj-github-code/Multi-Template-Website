import React, { Component } from "react";
import './feature.css';

class Features extends Component {
    render() {
        if (!this.props.data) return null;
        const features = this.props.data;
        return (
            <section className="section-4">
                <div className="container-fluid">
                    <div className="row">
                        {features.map((item,key) => (
                            <div className="col bg-card" key={key}>
                                <div className="card text-white txt-jk">
                                    <img src={item.icon} className="card-img cd-img-jk" alt={item.title} />
                                    <div className="card-img-overlay overlay-jk">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text card-p-jk">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;