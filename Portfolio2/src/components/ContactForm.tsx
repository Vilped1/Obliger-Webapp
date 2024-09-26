type ContactType = {
    email: string
}

export default function ContactForm(props: ContactType) {
    const {email} = props
    
    return(
        <>
        <section id="kontakt">
            <p>Har du spørsmål ta kontakt på:</p>
            <h3>{email}</h3>
            <form>
                <label>Navn:</label>
                <input type="text" name="title" id="title" placeholder="Kari Normann" required/>
                
                <label>Melding:</label>
                <textarea name="message" id="message" placeholder="Jeg lurer på..." required/>
                <button id="contactbtn">Send inn</button>
            </form>
            </section>
        </>
    )
}