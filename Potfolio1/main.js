import './style.css'

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
  console.log(data.data)
  const prodList = document.getElementById("prosjektListe")
  // {Kode fra copilot
  if (prodList) {
    prodList.innerHTML = ''
    data.data.forEach(prosjekt => {
        const li = document.createElement('li')
        li.textContent = `${prosjekt.title} - Sluttdato: ${prosjekt.endDate} - ${prosjekt.status}`
        prodList.appendChild(li)
    });
  }
  // }
}

const addProjectData = async (event) => {
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

const form = document.querySelector("form")
form.addEventListener("submit", async (event) =>{
    event.preventDefault()
    const title = (form.elements.namedItem("title")?.value)
    const description = (form.elements.namedItem("description")?.value)
    const startDate = (form.elements.namedItem("startDate")?.value)
    const endDate = (form.elements.namedItem("endDate")?.value)
    const status = (form.elements.namedItem("status")?.value)

    try {
        await addProjectData({title, description, startDate, endDate, status})
    } catch (error) {
        console.log(error)   
    }
})

loadProjectData()