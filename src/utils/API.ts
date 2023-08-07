

const url = "https://rickandmortyapi.com/api"
const urlEpisodes = `${url}/episode`
const page:number = 1


export async function getEpisodes(): Promise<Episodes[]> {
    const response = await fetch(urlEpisodes)
    const data = await response.json()
    return data.results
}


export async function getCharacters(page: number): Promise<Character[]> {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await response.json()
    return data.results
}