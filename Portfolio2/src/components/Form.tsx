export default function Form() {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (event) =>{
        event.preventDefault()
        const title = (form.elements.namedItem("title")?.value)
        const description = (form.elements.namedItem("description")?.value)
        const startDate = (form.elements.namedItem("startDate")?.value)
        const endDate = (form.elements.namedItem("endDate")?.value)
        const status = (form.elements.namedItem("status")?.value)

    try {
        await addProjectData({title, description, startDate, endDate, status})
    } catch (error) {
        console.log(error)   
    }
})

    return(
        <section id="nytt-prosjekt">
            <h2>Nytt prosjekt</h2>
                
            <form>
                <label>Navn:</label>
                <input type="text" name="title" id="title" placeholder="Portfolio" required/>
                
                <label>Beskrivelse:</label>
                <input type="text" name="description" id="description" placeholder="Lage portfolio til å..." required/>
                
                <label>Startdato:</label>
                <input type="date" name="startDate" id="startDate" required/>
                
                <label>Sluttdato:</label>
                <input type="date" name="endDate" id="endDate"/>
                
                <label>Status:</label>
                <select name="status" id="status">
                    <option value="Fullført">Fullført</option>
                    <option value="Pågående">Pågående</option>
                </select>

                <input type="submit" id="new-project" />
            </form>
        </section>
    )
}