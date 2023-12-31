var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getEpisodes } from "./utils/API.js";
import { getCharacters } from "./utils/API.js";
import { getLocations } from "./utils/API.js";
const showMoreBtn = document.querySelector("#ShowMoreBtn");
const episodeList = document.querySelector("#episodeList");
const main2 = document.querySelector("#residentsContainer");
const main = document.querySelector("#titleContainer");
window.addEventListener("load", init);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const episodes = yield getEpisodes(1);
        episodes.forEach((episode) => {
            const episodeTitle = document.createElement("a");
            episodeTitle.classList.add("list-group-item", "list-group-item-action", "list-group-item-light", "p-2");
            episodeTitle.textContent = `${episode.episode} - ${episode.name}`;
            episodeList === null || episodeList === void 0 ? void 0 : episodeList.appendChild(episodeTitle);
            episodeTitle.addEventListener(("click"), () => showCharacters(episode));
        });
    });
}
function showCharacters(episode) {
    return __awaiter(this, void 0, void 0, function* () {
        main.textContent = "";
        main2.textContent = "";
        const titleContainer = document.querySelector("#titleContainer");
        const h2 = document.createElement("h2");
        h2.classList.add("mt-4");
        h2.textContent = episode.name;
        const airdate = document.createElement("div");
        airdate.textContent = episode.air_date;
        const season = document.createElement("div");
        season.textContent = episode.episode;
        titleContainer === null || titleContainer === void 0 ? void 0 : titleContainer.prepend(airdate);
        titleContainer === null || titleContainer === void 0 ? void 0 : titleContainer.prepend(season);
        titleContainer === null || titleContainer === void 0 ? void 0 : titleContainer.prepend(h2);
        const characterContainer = document.querySelector("#characterContainer");
        characterContainer.textContent = "";
        for (let i = 1; i <= 42; i++) {
            const characters = yield getCharacters(i);
            const urlChars = episode.characters;
            urlChars.forEach(url => {
                characters.forEach((character) => {
                    if (url === character.url) {
                        const main2 = document.querySelector("#residentsContainer");
                        main2.textContent = "";
                        const mainDiv = document.createElement("div");
                        mainDiv.classList.add("col", "g-4");
                        characterContainer === null || characterContainer === void 0 ? void 0 : characterContainer.appendChild(mainDiv);
                        const cardContainer = document.createElement("div");
                        cardContainer.classList.add("card", "border-3", "border-dark", "rounded", "h-100");
                        mainDiv.appendChild(cardContainer);
                        const cardImage = document.createElement("img");
                        cardImage.classList.add("card-image-top");
                        cardImage.src = character.image;
                        cardImage.alt = `${character.id} image`;
                        cardContainer.appendChild(cardImage);
                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        cardContainer.appendChild(cardBody);
                        const cardTitle = document.createElement("h5");
                        cardTitle.classList.add("card-title", "border-bottom", "border-3", "border-dark", "p-1");
                        cardTitle.textContent = character.name;
                        const cardSpicie = document.createElement("p");
                        cardSpicie.classList.add("card-text");
                        cardSpicie.textContent = `Specie: ${character.species}`;
                        const cardStatus = document.createElement("p");
                        cardStatus.classList.add("card-text");
                        cardStatus.textContent = `Status: ${character.status}`;
                        const cardDimension = document.createElement("p");
                        cardDimension.classList.add("card-text");
                        cardDimension.textContent = `Dimension: ${character.location.name}`;
                        cardBody.appendChild(cardTitle);
                        cardBody.appendChild(cardSpicie);
                        cardBody.appendChild(cardStatus);
                        cardBody.appendChild(cardDimension);
                        cardImage.setAttribute("data-bs-toggle", "modal");
                        cardImage.setAttribute("data-bs-target", "#modal");
                        cardImage.addEventListener("click", showModal);
                        function showModal() {
                            return __awaiter(this, void 0, void 0, function* () {
                                main2.textContent = "";
                                const modal = document.querySelector("#modal");
                                modal.showModal;
                                modal.setAttribute("data-bs-dismiss", "modal");
                                modal.setAttribute("data-bs-target", "#modal");
                                const charName = document.querySelector("#charName");
                                charName.textContent = character.name;
                                const charImage = document.querySelector("#charImage");
                                charImage.src = character.image;
                                charImage.alt = `${character.id} image`;
                                const charText = document.querySelector("#charText");
                                charText.textContent = `Gender: ${character.gender} | Status: ${character.status} | Specie: ${character.species}`;
                                const charLocation = document.querySelector("#charLocation");
                                charLocation.textContent = `Location: ${character.origin.name}`;
                                charLocation.classList.add("border-3", "border", "border-black", "w-50", "bg-body-primary", "mb-3");
                                charLocation.addEventListener("click", showLocation);
                                const charEpisodeList = document.querySelector("#charEpisodeList");
                                charEpisodeList.textContent = "";
                                for (let i = 1; i <= 3; i++) {
                                    const episodes = yield getEpisodes(i);
                                    episodes.forEach((episode) => {
                                        const urlChars = episode.characters;
                                        urlChars.forEach(url => {
                                            if (character.url === url) {
                                                const createEpisodes = document.createElement("div");
                                                createEpisodes.textContent = `${episode.episode} - ${episode.name}`;
                                                charEpisodeList.appendChild(createEpisodes);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                    }
                    function showLocation() {
                        return __awaiter(this, void 0, void 0, function* () {
                            for (let i = 1; i <= 7; i++) {
                                const location = yield getLocations(i);
                                location.forEach((loc) => __awaiter(this, void 0, void 0, function* () {
                                    if (loc.url === character.origin.url) {
                                        main.textContent = "";
                                        characterContainer.textContent = "";
                                        const locName = document.createElement("h2");
                                        locName.textContent = loc.name;
                                        const locDimension = document.createElement("div");
                                        locDimension.textContent = loc.dimension;
                                        const locType = document.createElement("div");
                                        locType.textContent = loc.type;
                                        const residentsTitle = document.createElement("h3");
                                        residentsTitle.classList.add("p-2", "border-3", "border-bottom");
                                        residentsTitle.textContent = "List of Residents";
                                        main.appendChild(locName);
                                        main.appendChild(locDimension);
                                        main.appendChild(locType);
                                        main.appendChild(residentsTitle);
                                        for (let i = 1; i <= 42; i++) {
                                            const characters = yield getCharacters(i);
                                            characters.forEach(character => {
                                                if (loc.name === character.location.name) {
                                                    const mainDiv = document.createElement("div");
                                                    mainDiv.classList.add("col", "g-4");
                                                    main2.appendChild(mainDiv);
                                                    const cardContainer = document.createElement("div");
                                                    cardContainer.classList.add("card", "border-3", "border-dark", "rounded", "h-100");
                                                    mainDiv.appendChild(cardContainer);
                                                    const cardImage = document.createElement("img");
                                                    cardImage.classList.add("card-image-top");
                                                    cardImage.src = character.image;
                                                    cardImage.alt = `${character.id} image`;
                                                    cardContainer.appendChild(cardImage);
                                                    const cardBody = document.createElement("div");
                                                    cardBody.classList.add("card-body");
                                                    cardContainer.appendChild(cardBody);
                                                    const cardTitle = document.createElement("h5");
                                                    cardTitle.classList.add("card-title", "border-bottom", "border-3", "border-dark", "p-1");
                                                    cardTitle.textContent = character.name;
                                                    cardBody.appendChild(cardTitle);
                                                }
                                            });
                                        }
                                    }
                                }));
                            }
                        });
                    }
                });
            });
        }
    });
}
showMoreBtn === null || showMoreBtn === void 0 ? void 0 : showMoreBtn.addEventListener(("click"), showMore);
function showMore() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 2; i <= 3; i++) {
            const episodes = yield getEpisodes(i);
            episodes.forEach((episode) => {
                const episodeTitle = document.createElement("div");
                episodeTitle.classList.add("list-group-item");
                episodeTitle.classList.add("list-group-item-action");
                episodeTitle.classList.add("list-group-item-light");
                episodeTitle.classList.add("p-2");
                episodeTitle.textContent = `${episode.episode} - ${episode.name}`;
                episodeList === null || episodeList === void 0 ? void 0 : episodeList.appendChild(episodeTitle);
                episodeTitle.addEventListener(("click"), () => showCharacters(episode));
                const btnContainer = document.querySelector("#btnContainer");
                btnContainer.style.display = "none";
            });
        }
    });
}
//# sourceMappingURL=index.js.map