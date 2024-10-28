import { studies, experiences } from "../data/resume";
import Header from "../templates/Header";


function Resume () {
  return (
    <>

    <h2>Studies</h2>
    <ul>
      {studies.map(study => <li key={study.id}>
        <h3>{study.title}</h3>
        <p>{study.institution}</p>
        <p>{study.date}</p>
      </li>)}
    </ul>

    <h2>Experiences</h2>
    <ul>
      {experiences.map(experience => <li key={experience.id}>
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <p>{experience.date}</p>
      </li>)}
    </ul>
    </>
  )

  
}

export default Resume