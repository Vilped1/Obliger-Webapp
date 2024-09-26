import { useState } from "react"

type ContactType = {
    email: string
}

export default function ContactForm(props: ContactType) {
    const {email} = props
    const [name, setName] = useState("")
    const [note, setNote] = useState("")

    const mailAlert = async (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Takk for mailen, du hører fra meg snart!   Ditt navn: ${name}, Din melding: ${note}`)
        setName("")
        setNote("")
        console.log(name, note)
    }
    
    return(
        <>
        <section id="kontakt">
            <h2>Ta gjerne kontakt</h2>
            <p>Send en mail til: <strong>{email}</strong></p>
            <form>
                <label>Navn:</label>
                <input type="text" name="title" id="title" placeholder="Kari Normann" value={name} onChange={(e) => setName(e.target.value)} required/>
                
                <label>Melding:</label>
                <textarea name="message" id="message" placeholder="Jeg lurer på..." value={note} onChange={(e) => setNote(e.target.value)} required/>
                <button id="contactbtn" onClick={mailAlert}>Send mail</button>
            </form>
            </section>
        </>
    )
}