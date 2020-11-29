const Project = (props) => {
  return(
<>
<div className="card text-white bg-dark mb-3">
  <div className="card-header">{props.title}</div>
  <div className="card-body">
    <h5 className="card-title"><a href={props.github}>Github Link</a></h5>
  <p className="card-text">{props.about}</p>
  </div>
  </div>
</>
  )
}

export default Project