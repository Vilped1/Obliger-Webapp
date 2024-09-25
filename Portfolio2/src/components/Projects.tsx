import { ProjectType } from "../../backend/src/type"

type ProdType = {
    projects: ProjectType[]
    setProjects: any
}

export default function Projects({projects, setProjects}: ProdType) {

    const removeProject = (title: string) => {
        setProjects((prevProjects: any[]) => prevProjects.filter((prod) => prod.title !== title))
    }

    // const handleHabitMutation = (action: Action, habit: Habit) => {
    //     switch (action) {
    //       case "add":
    //         add(habit);
    //         break;
    //       case "remove":
    //         remove(habit.id);
    //         break;
    //       default:
    //         break;
    //     }
    //   };

    return(
        <section id="section">
        <h2>Alle prosjekter</h2>
        <ul id="prosjektListe">
            {projects.length === 0 ? (
                <p>Ingen prosjekter</p>
            ) : (
            projects.map((project, index) => (
                <li key={index}>
                <button onClick={() => removeProject(project.title)} type="button">X</button>
                {project.title} - Sluttdato: {project.endDate} - {project.status}
                </li>
            ))
            )}
        </ul>
        <p>Du har {projects.length} prosjekter!</p>
      </section>
      
    )
}