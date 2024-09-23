import Form from "./Form";
import Header from "./Header";
import Projects from "./Projects";

export default function Layout() {
    return(
        <>
            <Header/>
            <main>
                <Projects/>
                <Form/>
            </main>
        </>
    )
}