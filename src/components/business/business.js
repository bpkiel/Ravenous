import React from "react";
import './business.css'

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='pizza'/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.location.address}</p>
                        <p>{this.props.business.location.city}</p>
                        <p>{this.props.business.location.state} {this.props.business.location.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;