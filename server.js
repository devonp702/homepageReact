const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const fs = require('fs')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());
// Send every request to the React app
app.post('/send*', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'Devon',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

fs.appendFile('message.txt', 'mail', (err) =>{
  if (err) {
    res.json({
      status: 'fail'
    })
  } else {
    res.json({
    status: 'success'
    })
  }
});
});

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
