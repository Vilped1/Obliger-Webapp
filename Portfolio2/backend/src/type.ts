export type Id = ReturnType<typeof crypto.randomUUID>;

export type ProjectType = {
    id: any
    title: string
    description: string
    startDate: any
    endDate: any
    status: string
}