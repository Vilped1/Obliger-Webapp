import { ProjectType } from "../../backend/src/type"
import { useEffect, useState } from "react"

type ProdType = {
    projects: ProjectType[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>
    children: React.ReactNode;
}

export default function Projects({projects, setProjects, children}: ProdType) {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [name, setName] = useState("Alle prosjekter")

    // Modifisert kode fra copilot{
    const removeProject = (id: string) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
        console.log("Fjernet", projects)
    }

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
        <ul id="prosjektListe">
        <h2>{name}</h2>
            {filteredProjects.length === 0 ? (
                <p>Ingen prosjekter</p>
            ) : (
            filteredProjects.map((project, index) => (
                <li key={index} className="all">
                <button onClick={() => removeProject(project.id)} type="button">X</button>
                {project.title} - Sluttdato: {project.endDate} - {project.status}
                </li>
            ))
            )}
        </ul>
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
