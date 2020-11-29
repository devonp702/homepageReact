import React from "react"

const Contact = (props) => {
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
      <form id="myForm" onsubmit="handleFormSubmit(this)">
      <p className="h4 mb-4 text-center">Contact Details</p>
      <div className="form-group">
        <label className="text-white" for="email">Email Address:</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="example@email.com" />
      </div>
      <div className="form-group">
        <lable className="text-white" for="name">Name:</lable>
        <input className="form-control" id="name" name="name" type="text" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label className="text-white" for="writeMe">Message:</label>
        <textarea className="form-control" id="writeMe" name="writeMe" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-dark btn-block">Submit</button>
    </form>
    </div>
  );
}

export default Contact