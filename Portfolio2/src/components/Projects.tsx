import { ProjectType } from "../../backend/src/type"

type ProdType = {
    projects: ProjectType[]
    setProjects: any
    children: React.ReactNode;
}


export default function Projects({projects, setProjects, children}: ProdType) {

    const removeProject = (id: any) => {
        setProjects((prevProjects: any[]) => prevProjects.filter((prod) => prod.id !== id))
        console.log("Fjernet", projects)
    }

    return(
        <>
        <section id="section">
        <h2>Alle prosjekter</h2>
        <ul id="prosjektListe">
            {projects.length === 0 ? (
                <p>Ingen prosjekter</p>
            ) : (
            projects.map((project, index) => (
                <li key={index}>
                <button onClick={() => removeProject(project.id)} type="button">X</button>
                {project.title} - Sluttdato: {project.endDate} - {project.status}
                </li>
            ))
            )}
        </ul>
        <p>Du har {projects.length} prosjekter!</p>
      </section>
      {children}
      </>
    )
}