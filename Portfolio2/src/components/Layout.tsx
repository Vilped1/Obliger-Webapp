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
            <Header student={student} degree={degree} points={points}/>
            <main>
                {children}
            </main>
        </>
    )
}