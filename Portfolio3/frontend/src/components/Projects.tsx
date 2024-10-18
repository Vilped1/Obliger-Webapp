import { useEffect, useState } from "react"
import { ProjectType } from "../../../backend/src/type";

type ProdType = {
    projects: ProjectType[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>
    children: React.ReactNode;
    deleteProjectData: (id: string) => void
}

export default function Projects({projects, children, deleteProjectData}: ProdType) {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [name, setName] = useState("Alle prosjekter")

    // Modifisert kode fra copilot{
    // const handleDeleteProject = (id: string) => {
    //     setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
    //     // deleteProjectData(projects)
    //     console.log("Fjernet", projects)
    // }

    const filterProjects = (status: string) => {
        if (status === "Alle") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => project.status === status));
        }
        setName(`${status} prosjekter`)
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        filterProjects(event.target.value);
    }

    useEffect(() => {
        setFilteredProjects(projects)
        // deleteProjectData(projects)
    }, [projects])
    // }

    return(
        <>
        <section id="sort">
          <label>Sorter: </label>
          <select name="status" id="status" onChange={handleFilterChange}>
              <option value="Alle">Alle prosjekter</option>
              <option value="Fullført">Fullførte prosjekter</option>
              <option value="Pågående">Pågående prosjekter</option>
          </select>
        </section>
        <section id="section">
        <h2>{name}</h2>
        <ul id="prosjektListe">
            {filteredProjects.length === 0 ? (
                <p>Ingen prosjekter</p>
            ) : (
            filteredProjects.map((project, index) => (
                <li key={index} className="all">
                <button onClick={() => deleteProjectData(project.id)} type="button">X</button>
                {project.title} - Sluttdato: {project.endDate} - {project.status}
                </li>
            ))
            )}
        </ul>
          {/* <section id="prosjektListe">
            {filteredProjects.length === 0 ? (
                <p>Ingen prosjekter</p>
            ) : (
            filteredProjects.map((project, index) => (
                <article key={index} className="all">
                    <section>
                        <h3>{project.title}</h3>
                        <button onClick={() => deleteProjectData(project.id)} type="button">X</button>
                    </section>
                    - Beskrivelse: {project.description}
                    - Sluttdato: {project.endDate} - {project.status}
                </article>
            ))
            )}
        </section> */}
        {filteredProjects.length === 1 ? (
            <p>Du har {filteredProjects.length} prosjekt!</p>
        ) : (
            <p>Du har {filteredProjects.length} prosjekter!</p>
        )}
      </section>
      {children}
      </>
    )
}
