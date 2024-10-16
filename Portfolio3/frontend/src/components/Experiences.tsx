import Experience from "./Experience"

type ExperiencesType = {
    experienceOne: string
    experienceTwo: string
}

export default function Experiences(props: ExperiencesType) {
    const {experienceOne, experienceTwo} = props
    return (
      <section id="experience">
        <h2>Erfaringer:</h2>
        <Experience description={experienceOne} />
        <Experience description={experienceTwo} />
      </section>
    )
  }