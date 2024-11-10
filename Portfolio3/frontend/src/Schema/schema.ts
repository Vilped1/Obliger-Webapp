import {z} from "zod"

export{projectSchema, projectSchemas}

const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  publishedAt: z.any(),
  tags: z.any(),
  public: z.any()
})

const projectSchemas = z.array(projectSchema)