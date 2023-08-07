import { getEpisodes } from "./utils/API.js";
import { getCharacters } from "./utils/API.js";




window.addEventListener("load", init);

async function init() {
    const episodeList = document.querySelector("#episodeList")
    const episodes = await getEpisodes();

    episodes.forEach((episode) => {
        const episodeTitle = document.createElement("div")
        episodeTitle.classList.add("list-group-item")
        episodeTitle.classList.add("list-group-item-action")
        episodeTitle.classList.add("list-group-item-light")
        episodeTitle.classList.add("p-2")
        episodeTitle.textContent = `${episode.episode} - ${episode.name}`
        episodeList?.appendChild(episodeTitle)

        // const showMoreBtn = document.querySelector("#ShowMoreBtn")
        // showMoreBtn?.addEventListener(("click"), showMore)

        episodeTitle.addEventListener(("click"), () => showCharacters(episode))

        async function showCharacters(episode: Episodes) {

            const titleContainer = document.querySelector("#titleContainer")
            const h2 = document.createElement("h2")
            h2.classList.add("mt-4")
            h2.textContent = episode.name

            const airdate = document.createElement("div")
            airdate.textContent = episode.air_date

            const season = document.createElement("div")
            season.textContent = episode.episode

            titleContainer?.prepend(airdate)
            titleContainer?.prepend(season)
            titleContainer?.prepend(h2)

            console.log(episode.characters)
            const characters = await getCharacters();
            const urlChars = episode.characters
            urlChars.forEach(url => {

                characters.forEach((character: Character) => {
                    if (url === character.url) {
                        const characterContainer = document.querySelector("#characterContainer")

                        const mainDiv = document.createElement("div")
                        mainDiv.classList.add("col")
                        mainDiv.classList.add("g-4")
                        characterContainer?.appendChild(mainDiv)

                        const cardContainer = document.createElement("div")
                        cardContainer.classList.add("card")
                        cardContainer.classList.add("border-3")
                        cardContainer.classList.add("h-100")
                        mainDiv.appendChild(cardContainer)

                        const cardImage = document.createElement("img")
                        cardImage.classList.add("card-image-top")
                        cardImage.src = character.image
                        cardImage.alt = `${character.id} image`
                        cardContainer.appendChild(cardImage)

                        const cardBody = document.createElement("div")
                        cardBody.classList.add("card-body")
                        cardContainer.appendChild(cardBody)

                        const cardTitle = document.createElement("h5")
                        cardTitle.classList.add("card-title")
                        cardTitle.textContent = character.name

                        const cardType = document.createElement("p")
                        cardType.classList.add("card-text")
                        cardType.textContent = `Type: ${character.type}`

                        const cardStatus = document.createElement("p")
                        cardStatus.classList.add("card-text")
                        cardStatus.textContent = `Status: ${character.status}`

                        const cardDimension = document.createElement("p")
                        cardDimension.classList.add("card-text")
                        cardDimension.textContent = `Dimension: ${character.location.origin}`

                        cardBody.appendChild(cardTitle)
                        cardBody.appendChild(cardType)
                        cardBody.appendChild(cardStatus)
                        cardBody.appendChild(cardDimension)
                    }
                })





            })

        }

    })

}

async function showCharacters() {


}




 // async function showMore() {
    //     const episodeList = document.querySelector("#episodeList")
    //     const episodes = await getEpisodesMore();

    //     episodes.forEach((episode) => {
    //         const episodeTitle = document.createElement("div")
    //         episodeTitle.classList.add("list-group-item")
    //         episodeTitle.classList.add("list-group-item-action")
    //         episodeTitle.classList.add("list-group-item-light")
    //         episodeTitle.classList.add("p-2")
    //         episodeTitle.textContent = `${episode.episode} - ${episode.name}`
    //         episodeList?.appendChild(episodeTitle)

    //         episodeTitle.addEventListener(("click"), showCharacters)
    //         showMoreBtn
    //     })
    // }


