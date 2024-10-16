type HeaderType = {
    student: string
    degree: string
    points: number
}

export default function Footer(props: HeaderType) {
    const {student, degree, points} = props
    return(
        <footer>
          <p><strong>Navn:</strong> {student}</p>
          <p><strong>Utdanning:</strong> {degree}</p>
          <p><strong>Stdudie poeng:</strong> {points}p</p>
        </footer>
    )
}