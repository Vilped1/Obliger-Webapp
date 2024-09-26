import { Link } from 'react-router-dom';
// import ContactForm from './ContactForm';
type HeaderType = {
  student: string
  degree: string
  points: number
}

export default function Header(props: HeaderType) {
  const {student, degree, points} = props
    return(
        <header>
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li>Om meg</li>
            <li><Link to="contact">Ta kontakt</Link></li>
          </ul>
        </nav>
        <h3>{student}</h3>
          <p>{degree}</p>
          <p>{points}</p>
      </header>
    )
}
