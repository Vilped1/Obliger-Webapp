import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children: React.ReactNode;
  };

export default function Layout({children}: Props) {
    const student = 'Vilde Andrea Fjeld Pedersen'
    const degree = 'Bachelor IT'
    const points = 180

    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer student={student} degree={degree} points={points}/>
        </>
    )
}