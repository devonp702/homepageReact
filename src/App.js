import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
<div className="App">
<Router>
  <Header />
  <Route exact path="/homepageReact" component={ Home } />
  <Route exact path="/" component={ Home } />
  <Route exact path="/home" component={ Home } />
  <Route exact path="/homepageReact/projects" component={ Projects } />
  <Route exact path="/homepageReact/contact" component={ Contact } />
  <Footer />
</Router>
</div>
  );
}

export default App;