// import { useState, useEffect } from "react";
import projectsPage from "../data/projects"
import Header from "../templates/Header"


function Projects () {
  // const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   setProjects(projectsPage)
  // }, [])

  return (
    <>
  
      <h1>Projects</h1>
      <p>This is the projects page</p>
      <ul>
      {projectsPage.map(project => <li key={project.id}>
        <h2>{project.name}</h2>
        <img src={project.image}></img>
        <p>{project.description}</p>
        <a href={project.url}>enlace</a>
      </li>)}

      </ul>
    </>
  )
}

export default Projects