import React from "react"
import Project from "../components/Project"

const Projects = () => {
  return (
    <>
      <h1>Projects Page</h1>
      <div className="container">
      <Project title="Taco Music" github="https://github.com/devonp702/Music-API-Group-Project" />
      </div>
    </>
  );
}

export default Projects