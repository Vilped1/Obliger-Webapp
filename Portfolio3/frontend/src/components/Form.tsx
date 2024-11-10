import { ProjectType } from "../../../backend/src/type"

type FormType = {
    addProjectData: (project: ProjectType) => void
}

export default function Form({addProjectData}: FormType) {  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    let newProject: ProjectType = {
        id: crypto.randomUUID(),
        title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
        description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
        startDate: (form.elements.namedItem("startDate") as HTMLInputElement)?.value,
        endDate: (form.elements.namedItem("endDate") as HTMLInputElement)?.value,
        status: (form.elements.namedItem("status") as HTMLInputElement)?.value,
        publishedAt: new Date(),
        tags: (form.elements.namedItem("tag") as HTMLInputElement)?.value,
        public: (form.elements.namedItem("public") as HTMLInputElement)?.value === "false" ? false : true,
    }
    addProjectData(newProject)
    // form.reset()
  }

  return(
      <section id="nytt-prosjekt">
      <h2>Nytt prosjekt</h2>
      
      <form  id="form" onSubmit={handleSubmit}>
        <label>Navn:</label>
        <input type="text" id="title" placeholder="Portfolio" required/>
        
        <label>Beskrivelse:</label>
        <input type="text" id="description" placeholder="Lage portfolio til å..." required/>
        
        <label>Startdato:</label>
        <input type="date" id="startDate" required/>
        
        <label>Sluttdato:</label>
        <input type="date" id="endDate" required/>
        
        <label>Kategori:</label>
        <select name="tag" id="tag">
          <option value="Webapp">Webapp</option>
          <option value="Innfoprog">Innfoprog</option>
        </select>

        <label>Status:</label>
        <select name="status" id="status" defaultValue="">
          {/* <option value="" disabled>Select</option> */}
          <option value="Fullført">Fullført</option>
          <option value="Pågående">Pågående</option>
        </select>

        <label>Offentlig:</label>
        <select name="public" id="public">
          <option value="false">Nei</option>
          <option value="true">Ja</option>
        </select>

        <button type="submit" id="new-project">Send</button>
      </form>
    </section>
  )
}