const Header = () => {
return (
<>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      <img src="/Logo.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
      Devon Phillips
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/homepageReact">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/homepageReact/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/homepageReact/contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</>
);
}

export default Header;