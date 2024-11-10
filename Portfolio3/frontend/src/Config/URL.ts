const api_URL = "http://localhost:3899"

const URLS = {
    mainURL: `${api_URL}`,
    idURL: (id: string) => `${api_URL}/${id}`
}

export{api_URL, URLS}