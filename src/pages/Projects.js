import React from "react"
import Project from "../components/Project"

const Projects = () => {
  return (
    <>
      <h1>Projects Page</h1>
      <div className="container">
      <p className="text-white">
          These are my recent coding projects. This is where my future projects will also be posted as I finish them. Github Links are provided for projects where they exist. Please look at the README files for more information.
        </p>
        <div className="row">
      <Project title="Taco Music" github="https://github.com/devonp702/Music-API-Group-Project" about="A basic music search and preview page, with Tacos!" link="https://noracurcio.github.io/Music-API-Group-Project/" screenshot="https://raw.githubusercontent.com/devonp702/Music-API-Group-Project/main/images/screenshot.jpg" />
      <Project title="Couch Surfers" github="https://github.com/devonp702/couchSurfers" link="https://dry-scrubland-38194.herokuapp.com/" screenshot="https://raw.githubusercontent.com/devonp702/couchSurfers/main/public/assets/img/blog-page-with-posts.png" about="An open blog about travel" />
      <Project title="Password Generator" github="https://github.com/devonp702/jsPasswordGen" link="https://devonp702.github.io/jsPasswordGen/" screenshot="https://github.com/devonp702/jsPasswordGen/raw/master/screenshot.png" about="Make a new password on the fly, with many options." />
      <Project title="Workout Tracker" github="https://github.com/devonp702/workoutTracker" link="https://lit-plains-44631.herokuapp.com/" screenshot="https://github.com/devonp702/workoutTracker/raw/main/main.png" about="Keep track of your workouts. Written with mongoose." />
      <Project title="Readme Wizard" github="https://github.com/devonp702/readmeWizard" link="https://github.com/devonp702/readmeWizard" screenshot="https://github.com/devonp702/readmeWizard/raw/main/screenvid.gif" about="Create beautiful Readme files in the comand line." />
      <Project title="Note Palace" github="https://github.com/devonp702/noteTaker" link="https://notepalace.herokuapp.com/" screenshot="https://github.com/devonp702/noteTaker/raw/main/screenshot.png" about="Write notes to your local storage in express." />
      </div>
      </div>
    </>
  );
}

export default Projects