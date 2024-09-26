import { ProjectType } from "../../backend/src/type"


type FormType = {
    addProjectData: (project: ProjectType) => void;
}

export default function Form({addProjectData}: FormType) {  
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const newProject: ProjectType = {
            id: crypto.randomUUID(),
            title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
            description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
            startDate: (form.elements.namedItem("startDate") as HTMLInputElement)?.value,
            endDate: (form.elements.namedItem("endDate") as HTMLInputElement)?.value,
            status: (form.elements.namedItem("status") as HTMLInputElement)?.value,
        }

        addProjectData(newProject)
      }

    return(
        <section id="nytt-prosjekt">
        <h2>Nytt prosjekt</h2>
        
        <form onSubmit={handleSubmit}>
          <label>Navn:</label>
          <input type="text" id="title" placeholder="Portfolio" required/>
          
          <label>Beskrivelse:</label>
          <input type="text" id="description" placeholder="Lage portfolio til å..." required/>
          
          <label>Startdato:</label>
          <input type="date" id="startDate" required/>
          
          <label>Sluttdato:</label>
          <input type="date" id="endDate" required/>
          
          <label>Status:</label>
          <select name="status" id="status">
              <option value="Fullført">Fullført</option>
              <option value="Pågående">Pågående</option>
          </select>

          <button type="submit" id="new-project">Send</button>
        </form>
      </section>
    )
}