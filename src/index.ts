import { getEpisodes } from "./utils/API.js";
import { getCharacters } from "./utils/API.js";

const showMoreBtn = document.querySelector("#ShowMoreBtn")
const episodeList = document.querySelector("#episodeList")

// Init Function

window.addEventListener("load", init);

async function init() {

    const episodes = await getEpisodes(1);

    episodes.forEach((episode) => {
        const episodeTitle = document.createElement("div")
        episodeTitle.classList.add("list-group-item", "list-group-item-action", "list-group-item-light", "p-2")
        episodeTitle.textContent = `${episode.episode} - ${episode.name}`
        episodeList?.appendChild(episodeTitle)

        episodeTitle.addEventListener(("click"), () => showCharacters(episode))
    })
}

// Show Characters

async function showCharacters(episode: Episodes) {
    const main = document.querySelector("#titleContainer") as HTMLElement
    main.textContent = ""

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

    const characterContainer = document.querySelector("#characterContainer") as HTMLElement
    characterContainer.textContent = ""

    for (let i = 1; i <= 42; i++) {

        const characters = await getCharacters(i);
        const urlChars = episode.characters

        urlChars.forEach(url => {

            characters.forEach((character: Character) => {
                if (url === character.url) {

                    const mainDiv = document.createElement("div")
                    mainDiv.classList.add("col", "g-4")
                    characterContainer?.appendChild(mainDiv)

                    const cardContainer = document.createElement("div")
                    cardContainer.classList.add("card", "border-3", "border-dark", "rounded", "h-100")
                    mainDiv.appendChild(cardContainer)

                    const cardImage = document.createElement("img")
                    cardImage.classList.add("card-image-top")
                    cardImage.src = character.image
                    cardImage.alt = `${character.id} image`
                    cardContainer.appendChild(cardImage)
                    cardImage.addEventListener("click", showModal)

                    const cardBody = document.createElement("div")
                    cardBody.classList.add("card-body")
                    cardContainer.appendChild(cardBody)

                    const cardTitle = document.createElement("h5")
                    cardTitle.classList.add("card-title", "border-bottom", "border-3", "border-dark", "p-1")
                    cardTitle.textContent = character.name

                    const cardType = document.createElement("p")
                    cardType.classList.add("card-text")
                    cardType.textContent = `Type: ${character.type}`

                    const cardStatus = document.createElement("p")
                    cardStatus.classList.add("card-text")
                    cardStatus.textContent = `Status: ${character.status}`

                    const cardDimension = document.createElement("p")
                    cardDimension.classList.add("card-text")
                    cardDimension.textContent = `Dimension: ${character.location.name}`

                    cardBody.appendChild(cardTitle)
                    cardBody.appendChild(cardType)
                    cardBody.appendChild(cardStatus)
                    cardBody.appendChild(cardDimension)
                }
            })
        })
    }
}

// Show More Btn

showMoreBtn?.addEventListener(("click"), showMore)

async function showMore() {
    for (let i = 2; i <= 3; i++) {
        const episodes = await getEpisodes(i);

        episodes.forEach((episode) => {
            const episodeTitle = document.createElement("div")
            episodeTitle.classList.add("list-group-item")
            episodeTitle.classList.add("list-group-item-action")
            episodeTitle.classList.add("list-group-item-light")
            episodeTitle.classList.add("p-2")
            episodeTitle.textContent = `${episode.episode} - ${episode.name}`
            episodeList?.appendChild(episodeTitle)

            episodeTitle.addEventListener(("click"), () => showCharacters(episode))

            const btnContainer = document.querySelector("#btnContainer") as HTMLElement
            btnContainer.style.display = "none"
        }
        )
    }
}

// Modal

function showModal() {
    const modal = document.querySelector("#modal") as HTMLDialogElement
    modal.showModal

}