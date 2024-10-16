import { Link } from 'react-router-dom';

export default function Header() {
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
      </header>
    )
}
