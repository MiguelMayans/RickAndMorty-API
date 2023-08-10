export async function getEpisodes(page: number): Promise<Episodes[]> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Something went wrong");
    };
}

export async function getCharacters(page: number): Promise<Character[]> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Something went wrong");
    }
}

export async function getLocations(page: number): Promise<Location[]> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Something went wrong");
    }
}