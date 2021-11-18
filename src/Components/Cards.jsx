import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol } from 'mdbreact';

const Cards = ({property}) => {
    const {picture,index} = property;
  return (
    <MDBCol>
      <MDBCard  id={`card-${index}`} className="card" style={{ width: "18rem" }}>
        <MDBCardImage className="img-fluid" src={picture} waves />
        
    
         <span className="index">{index+1}</span>
      
        
      </MDBCard>
    </MDBCol>
  )
}

export default Cards;