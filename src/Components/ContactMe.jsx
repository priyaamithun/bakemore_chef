import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import axios from 'axios';


function validate(name,email,subject,message){
return {
  name : name.length === 0,
  email : email.length === 0,
  subject : subject.length === 0,
  message : message.length === 0

};
}


class ContactMe extends React.Component{
  constructor(){
    super();
    
    this.state = {
      name : '',
      email : '',
      subject : '',
      message : '',
      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: ""
    }
  this.baseState = this.state;

this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

async handleSubmit(e){


if(!this.canBeSubmitted()){
  e.preventDefault();
return;
}
const user = {
    name : this.state.name,
    email : this.state.email,
    subject : this.state.subject,
    message : this.state.message
  }

alert (`Hi ${user.name} ! you have send message to bake more.`)

const form = await axios.post('/api/form' ,{user})
.then(res =>{
  console.log(res);
  console.log(res.data);
})


}
canBeSubmitted (){
  const error = validate(this.state.name,this.state.email, this.state.subject, this.state.message);
  const isDisabled = Object.keys(error).some(x => error[x]);
  return !isDisabled;
}

resetForm = ()=>{
    this.setState(this.baseState);
  }

  render(){
    const errors = validate(this.state.name, this.state.email, this.state.subject, this.state.message);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      
        <div className="contact_me">
        <h3>You can reach me</h3>

        <div className="contact-content">
       
       {/* content --one */}
        <div className="form">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <div className="contact">
              
                <MDBInput 
                className={errors.name ? "error" : ""}
                  label="name"
                  icon="user"
                  name="name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right" onChange={this.handleNameChange}
                  value={this.state.name}
                />
                <MDBInput
                className={errors.email ? "error" : ""}
                  label="email"
                  icon="envelope"
                  name="email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right" onChange={this.handleEmailChange}
                  value={this.state.email}
                />
                <MDBInput
                className={errors.subject ? "error" : ""}
                  label="subject"
                  name="subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right" onChange={this.handleSubjectChange}
                  value={this.state.subject}
                />
                <MDBInput
                className={errors.message ? "error" : ""}
                  type="textarea"
                  name="message"
                  rows="2"
                  label="message"
                  icon="pencil-alt" onChange={this.handleMessageChange}
                  value={this.state.message}
                />
              </div>
              <div className="text-center">
                <MDBBtn  disabled={isDisabled} onClick={this.handleSubmit} className ="btn btn-default"  size="sm">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
                <MDBBtn  onClick={this.resetForm} className ="btn btn-default" size="sm" >
                  Clear <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      {/* end of content one */}
      {/* content two */}
      <div className="details">
    <p><i className="fas fa-map-marker-alt"></i> The Reserve</p><span>Apartments</span>
    <p><i className="fas fa-phone"></i>12345678</p>
    <p><i className="fas fa-envelope"></i>bakemore@gmail.com</p>
      </div>
      {/* end of content two */}
      </div>  {/*end of contact-content */}
      </div> 
    //   end of contact
    );
  }
  }


export default ContactMe;