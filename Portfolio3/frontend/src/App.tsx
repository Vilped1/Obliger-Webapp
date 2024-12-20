// import { useEffect, useState } from 'react'
import './style/main.scss'
// import { ProjectType } from "../../backend/src/type"
import Projects from './components/Projects'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Experiences from './components/Experiences'
import ContactForm from './components/ContactForm'
import useProject from './Hooks/useProjects'

// Copilot er blitt brukt som et hjelpemiddel i denne oppgaven, samt oppgaver gjort i forelesning

function App() {
  const {addProjectData, deleteProjectData, prod, setProd} = useProject()
  // const [prod, setProd] = useState<ProjectType[]>([])

  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'vapeders@hiof.no'

  // Fra forelesning!!
  // const loadProjectData = async () => {
  //   const response = await fetch("http://localhost:3899", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   })
  //   console.log("Get", response.status)
  //   console.log("Get", response.ok)

  //   const data = await response.json()
  //   setProd(data.data)
  //   console.log("Get", data)
  // }

  // const addProjectData = async (event: ProjectType) => {
  //   try {
  //     const response = await fetch("http://localhost:3899", {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(event)
  //     })
  //     console.log("Status", response.status)
  //     console.log("OK", response.ok)

  //     const data = await response.json()
  //     console.log("Post", data)
  //     const onAddProject = (project: Omit<ProjectType, "id">) => {
  //       setProd((prev: any) => [...prev, {id: crypto.randomUUID(), ...project}])
  //     }
  //     onAddProject(data)
  //     loadProjectData()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const deleteProjectData = async (id: string) => {
  //   try {
  //     const response = await fetch(`http://localhost:3899/${id}`, { 
  //       method: 'DELETE',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     console.log("Delete", response.status)
  //     console.log("Delete OK", response.ok)

  //     const data = await response.json()
  //     setProd(data.updatedProjects)
  //     // loadProjectData()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // useEffect(() => {
  //   loadProjectData()
  // }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={
            <Projects projects={prod} setProjects={setProd} deleteProjectData={deleteProjectData} >
              <Form addProjectData={addProjectData} />
              <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} />
            </Projects>} />
          <Route path='contact' element={<ContactForm email={email} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App