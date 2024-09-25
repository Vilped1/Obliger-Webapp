type ExperienceType = {
    description: string
}

export default function Experience(props: ExperienceType) {
    const {description} = props
    return(
        <>
            <p>{description}</p>
        </>
    )
}