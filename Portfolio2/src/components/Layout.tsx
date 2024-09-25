// import { useState } from "react";
import { PropsWithChildren } from "react";
import { ProjectType } from "../../backend/src/type";
// import Form from "./Form";
import Header from "./Header";
// import Projects from "./Projects";

// type LayoutType = {
//     projects: ProjectType[]
//     // setProjects: any
// }

type Props = {
    children: React.ReactNode;
  };

export default function Layout({children}: Props) {
    // const {children} = props
    // const [projects] = useState<ProjectType[]>([])
    const student = 'Halgeir Geirson'
    const degree = 'Bachelor IT'
    const points = 180

    return(
        <>
            <Header student={student} degree={degree} points={points}/>
            <main>
                {children}
            </main>
        </>
    )
}