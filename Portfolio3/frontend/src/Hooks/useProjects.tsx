import { useEffect, useState } from "react";
import { ProjectType } from "../../../backend/src/type";
import { URLS } from "../Config/URL";
import { ofetch } from "ofetch";
import { projectSchemas } from "../Schema/schema";

export default function useProject() {
    const [prod, setProd] = useState<ProjectType[]>([])

    const loadProjectData = async () => {
        const response = await ofetch(`${URLS.mainURL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log("Get", response.status)
        console.log("Get", response.ok)
    
        try { 
            projectSchemas.parse(prod);
            console.log("Funker")
          } catch (error) {
              console.error("Validation failed:", error);
          } 

        // const data = await response.json()
        setProd(response.data)
        console.log("Get", response.data)
      }
    
      const addProjectData = async (event: ProjectType) => {
        try {
          const response = await ofetch(`${URLS.mainURL}`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
          })
          console.log("Status", response.status)
          console.log("OK", response.ok)
    
        //   const data = await response.json()
          console.log("Post", response)
          const onAddProject = (project: Omit<ProjectType, "id" | "publishedAt">) => {
            setProd((prev: any) => [...prev, {id: crypto.randomUUID(), publishedAt: new Date(), ...project}])
          }
          onAddProject(response)
          loadProjectData()
        } catch (error) {
          console.log(error)
        }
      }
    
      const deleteProjectData = async (id: string) => {
        try {
          const response = await ofetch(`${URLS.mainURL}/${id}`, { 
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
            },
          })
          console.log("Delete", response.status)
          console.log("Delete OK", response.ok)
    
        //   const data = await response.json()
          setProd(response.updatedProjects)
          // loadProjectData()
        } catch (error) {
          console.log(error)
        }
      }
      
      useEffect(() => {
        loadProjectData()
      }, [])

      return{addProjectData, deleteProjectData, prod, setProd}
}