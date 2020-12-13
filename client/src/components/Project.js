const Project = (props) => {
  return(
<>
<div className="card text-white bg-dark mb-3">
  <img src={props.screenshot} className="card-img-top" alt="Screenshot of my project" />
  <div className="card-body">
    <h5 className="card-title"><a href={props.github}>{props.title}</a></h5>
    <a href={props.link} className="btn btn-primary">See Project</a>
  <p className="card-text">{props.about}</p>
  </div>
  </div>
</>
  )
}

export default Project