import { ProjectType } from "../../backend/src/type"

type ProdType = {
    projects: ProjectType[]
}

export default function Projects({projects}: ProdType) {

    return(
        <section id="section">
        <h2>Alle prosjekter</h2>
        <ul id="prosjektListe">
        {projects.map((project, index) => (
              <li key={index}>
                {project.title} - Sluttdato: {project.endDate} - {project.status}
              </li>
            ))}
        </ul>
      </section>
    )
}