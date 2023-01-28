import React, { Component } from "react";
import './infoText.css';

class InfoText extends Component {
    render() {
        if (!this.props.data) return null;
        const data = this.props.data;
        return (
            <section className="section-5">
                <div className="sec-5jk">
                    <h1 className="sec-5jk-h1">{data.title}</h1>
                    <p className="sec-5jk-p">{data.description}</p>
                </div>
            </section>
        );
    }
}

export default InfoText;