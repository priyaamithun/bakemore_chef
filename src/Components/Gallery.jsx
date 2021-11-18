import React from "react";
import data from "../data/data";
import Cards from "./Cards";
import { MDBBtn } from "mdbreact";

// const images = [
//  1,2,3,4];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[2],
    };
  }

  nextImage = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  prevImage = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  render() {
    const { properties, property, index } = this.state;

    return (
      <div>
       
        <div className="BtnSlider">
          <MDBBtn
            color="grey"
            size="sm"
            className="img-btn"
            onClick={() => this.prevImage()}
            disabled={property.index === 0}
          >
            <i className="fas fa-chevron-left " />
          </MDBBtn>

          <MDBBtn
            color="grey"
            size="sm"
            className="img-btn"
            onClick={() => this.nextImage()}
            disabled={property.index === data.properties.length - 1}
          >
            <i className="fas fa-chevron-right" />
          </MDBBtn>
        </div>
        
        <div className={`cards-slider active-slide-${property.index}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${property.index *
                (100 / properties.length)}%)`,
            }}
          >
            {properties.map((property) => (
              <Cards key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
