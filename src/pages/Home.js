import React from "react"

const HomePage = (props) => {
  return (
    <>
    <main className="container">
    <div className="row">
      <div className="col-12">
        <h1>Devon's Homepage</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-8">
        <h2 className="h2 text-white">About Me</h2>
        <img src='homepageReact/images/top.jpg' className="img-fluid rounded col-6 float-left" alt="Devon and Katheryn smile"/>
        <p className="text-white">
          Welcome to my home web page. I’m currently finishing up the full stack web development boot camp at University
          of Denver. I grew up in California and Oregon, went to school in Idaho, and later moved to Las Vegas for 5
          years. In Idaho, I went to school at Brigham Young University- Idaho, where I met my wife, and graduated with
          a B.A. in Spanish Education with a minor in TESOL. I worked in the school system in various positions for 5
          years, doing everything from teaching and running after school clubs, to managing the campus wide lunch
          program, and training a new maintenance hire. My daughter was born soon after, and we all moved to Colorado
          where I am now.
        </p>
        <img src="homepageReact/images/bbnme.jpg" className="img-fluid rounded col-6 float-right"
          alt="Devon smiles, baby makes a fierce face"/>
        <p className="text-white">
          I am always happy to learn something new, and enjoy working on something creative. In my spare time, I play
          guitar, read books, watch cartoons, and spend time with my family. I like strategy board games, and especially
          enjoy go, and richii mah-jongg. I feel like web development, and programming are the perfect combination of
          art and logic. I have been playing with code since I was a kid, making little files in apple-script. I am
          learning web development in class, but am also interested in python, swift, computer learning, and making text
          based RPG games. I build websites using  Please feel free to explore the site.
        </p>
      </div>
      <div className="col-12 col-lg-4">
        <h2 className="h2 text-white">Links</h2>
        <p className="text-white">Here is a list of some websites I use. Take a look to see what I'm up to.</p>
        <ul className="list-inline">
          <li><a href="https://github.com/devonp702" target="_blank" rel="noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/dphillips702/" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a href="https://www.sololearn.com/Profile/9680547/?ref=app" target="_blank" rel="noreferrer">Sololearn</a></li>
          <li><a href="https://stackoverflow.com/users/14089963/devon-phillips" target="_blank" rel="noreferrer">Stack Overflow</a></li>
          <li><a href="https://steamcommunity.com/profiles/76561198037755410/" target="_blank" rel="noreferrer">Steam</a></li>
          <li><a href="https://soundcloud.com/jaakukaba" target="_blank" rel="noreferrer">Soundcloud</a></li>
          <li><a href="homepageReact/dpres.pdf">My Resume</a></li>
        </ul>
      </div>
    </div>
  </main>
    </>
  );
}

export default HomePage