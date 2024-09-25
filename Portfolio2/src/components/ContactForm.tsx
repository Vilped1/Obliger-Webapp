export default function ContactForm() {
    return(
        <main>
        <h1>HIIIIIIII</h1>
        <form>
          <label>Navn:</label>
          <input type="text" name="title" id="title" placeholder="Portfolio" required/>
          
          <label>Beskrivelse:</label>
          <input type="text" name="description" id="description" placeholder="Lage portfolio til å..." required/>
          
          <label>Startdato:</label>
          <input type="date" name="startDate" id="startDate" required/>
          
          <label>Sluttdato:</label>
          <input type="date" name="endDate" id="endDate" required/>
          
          <label>Status:</label>
          <select name="status" id="status">
              <option value="Fullført">Fullført</option>
              <option value="Pågående">Pågående</option>
          </select>

          <button type="submit" id="new-project">Send</button>
        </form>
        </main>
    )
}