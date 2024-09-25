import { useEffect, useState } from 'react'
import './style/main.scss'
import { ProjectType } from "../backend/src/type"
import Header from './components/Header'
import Projects from './components/Projects'
import Form from './components/Form'


function App() {
  const [prod, setProd] = useState<ProjectType[]>([])

// Fra forelesning!!
const loadProjectData = async() => {
  const response = await fetch("http://localhost:3899", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
  })
  console.log(response.status)
  console.log(response.ok)
  
  const data = await response.json()
  setProd(data.data)
}

const addProjectData = async (event: ProjectType) => {
  try {
      const response = await fetch("http://localhost:3899", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(event)
  })
  console.log("Status", response.status)
  console.log("OK", response.ok)
  
  const data = await response.json()
  console.log(data)
  loadProjectData()
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  loadProjectData()
}, [])

  return (
    <>
      <Header/>
      <main>
        <Projects projects={prod} />
        <Form onAddProject={addProjectData} />
      </main>
    </>
  )
}

export default App