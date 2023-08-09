export async function getEpisodes(page: number): Promise<Episodes[]> {
    const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    const data = await response.json()
    return data.results
}


export async function getCharacters(page: number): Promise<Character[]> {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await response.json()
    return data.results
}

export async function getLocations(page: number): Promise<Location[]> {
    const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    const data = await response.json()
    return data.results
}