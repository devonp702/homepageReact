import React, { Component } from "react";
import axios from "axios"
class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     console.log(this.state)
//     // Alert the user their first and last name, clear `this.state.name` and `this.state.email`, clearing the inputs
//     alert(`Hello ${this.state.name} ${this.state.email}`);
//     this.setState({
//       name: "",
//       email: "",
//       message: ""

//     });
//   };

  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
            name: "",
            email: "",
            message: ""
      
          });
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        console.log(response)
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
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.name} {this.state.email}
        </p>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Your Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;











// import React from "react";
// import axios from 'axios';
// // A big thanks goes to https://blog.mailtrap.io/react-contact-form/ for the instructuions!

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST", 
//       url:"/send", 
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Message Sent."); 
//         console.log(response)
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   resetForm(){
//     this.setState({name: '', email: '', message: ''})
//   }

//     handleInputChange = event => {
//       // Getting the value and name of the input which triggered the change
//       const { name, value } = event.target;
//       // Updating the input's state
//       this.setState({
//         [name]: value
//       });
//     };
  

//   render() {
//     return (
//       <div className="container">
//         <h1> Contact Me </h1>
//         <div className="row">
//         <div className="col-12 col-lg-6">
//           <img
//             src="https://image.freepik.com/free-vector/watercolor-illustration-cute-cartoon-magic-owl-wizard-hat-with-letter-its-beak-isolated_214720-244.jpg"
//             className="img-fluid" alt="An owl with a letter" />
//         </div>
//         <div className="col-12 col-lg-6">
//           <p className="text-white lead">
//             Thank you for stopping by. Please send me a message, and I'll get back to you as soon as I can.
//           </p>
//         </div>
//         </div>
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//         <p className="h4 mb-4 text-center">Contact Details</p>
//         <div className="form-group">
//           <label className="text-white" htmlFor="email">Email Address:</label>
//           <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleinputchange}/>        </div>
//         <div className="form-group">
//           <lable className="text-white" htmlFor="name">Name:</lable>
//           <input className="form-control" id="name" name="name" type="text" value={this.state.name} onChange={this.handleinputchange}  />
//         </div>
//         <div className="form-group">
//           <label className="text-white" htmlFor="message">Message:</label>
//           <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.handleinputchange} />
//         </div>
//         <button type="submit" className="btn btn-dark btn-block">Submit</button>
//       </form>
//       </div>
//     );
//   }

// }
// export default Contact;
