

const url = "https://rickandmortyapi.com/api"
const urlEpisodes = `${url}/episode`

const urlCharacters = `${url}/character?per_page=2`

export async function getEpisodes(): Promise<Episodes[]> {
    const response = await fetch(urlEpisodes)
    const data = await response.json()
    return data.results
}



export async function getCharacters(): Promise<Character[]> {
    const response = await fetch(urlCharacters)
    const data = await response.json()
    return data.results
}