import React from "react";
import axios from 'axios';
// A big thanks goes to https://blog.mailtrap.io/react-contact-form/ for the instructuions!

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return (
      <div className="container">
        <h1> Contact Me </h1>
        <div className="row">
        <div className="col-12 col-lg-6">
          <img
            src="https://image.freepik.com/free-vector/watercolor-illustration-cute-cartoon-magic-owl-wizard-hat-with-letter-its-beak-isolated_214720-244.jpg"
            className="img-fluid" alt="An owl with a letter" />
        </div>
        <div className="col-12 col-lg-6">
          <p className="text-white lead">
            Thank you for stopping by. Please send me a message, and I'll get back to you as soon as I can.
          </p>
        </div>
        </div>
        <form id="myForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <p className="h4 mb-4 text-center">Contact Details</p>
        <div className="form-group">
          <label className="text-white" htmlFor="email">Email Address:</label>
          <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}  />
        </div>
        <div className="form-group">
          <lable className="text-white" htmlFor="name">Name:</lable>
          <input className="form-control" id="name" name="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}  />
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-dark btn-block">Submit</button>
      </form>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

}
export default Contact;