import { useState } from "react";
import { ProjectType } from "../../backend/src/type";
import Form from "./Form";
import Header from "./Header";
import Projects from "./Projects";

// type LayoutType = {
//     projects: ProjectType[]
//     // setProjects: any
// }

export default function Layout() {
    // const [projects] = useState<ProjectType[]>([])

    return(
        <>
            <Header/>
            <main>
                <Projects projects={projects}/>
                <Form/>
            </main>
        </>
    )
}