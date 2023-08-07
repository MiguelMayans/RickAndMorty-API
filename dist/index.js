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
window.addEventListener("load", init);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const episodeList = document.querySelector("#episodeList");
        const episodes = yield getEpisodes();
        episodes.forEach((episode) => {
            const episodeTitle = document.createElement("div");
            episodeTitle.classList.add("list-group-item");
            episodeTitle.classList.add("list-group-item-action");
            episodeTitle.classList.add("list-group-item-light");
            episodeTitle.classList.add("p-2");
            episodeTitle.textContent = `${episode.episode} - ${episode.name}`;
            episodeList === null || episodeList === void 0 ? void 0 : episodeList.appendChild(episodeTitle);
            episodeTitle.addEventListener(("click"), () => showCharacters(episode));
            function showCharacters(episode) {
                return __awaiter(this, void 0, void 0, function* () {
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
                    console.log(episode.characters);
                    for (let i = 1; i <= 42; i++) {
                        const characters = yield getCharacters(i);
                        const urlChars = episode.characters;
                        urlChars.forEach(url => {
                            characters.forEach((character) => {
                                if (url === character.url) {
                                    const characterContainer = document.querySelector("#characterContainer");
                                    const mainDiv = document.createElement("div");
                                    mainDiv.classList.add("col");
                                    mainDiv.classList.add("g-4");
                                    characterContainer === null || characterContainer === void 0 ? void 0 : characterContainer.appendChild(mainDiv);
                                    const cardContainer = document.createElement("div");
                                    cardContainer.classList.add("card");
                                    cardContainer.classList.add("border-3");
                                    cardContainer.classList.add("border-dark");
                                    cardContainer.classList.add("rounded");
                                    cardContainer.classList.add("h-100");
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
                                    cardTitle.classList.add("card-title");
                                    cardTitle.textContent = character.name;
                                    const cardType = document.createElement("p");
                                    cardType.classList.add("card-text");
                                    cardType.textContent = `Type: ${character.type}`;
                                    const cardStatus = document.createElement("p");
                                    cardStatus.classList.add("card-text");
                                    cardStatus.textContent = `Status: ${character.status}`;
                                    const cardDimension = document.createElement("p");
                                    cardDimension.classList.add("card-text");
                                    cardDimension.textContent = `Dimension: ${character.location.name}`;
                                    cardBody.appendChild(cardTitle);
                                    cardBody.appendChild(cardType);
                                    cardBody.appendChild(cardStatus);
                                    cardBody.appendChild(cardDimension);
                                }
                            });
                        });
                    }
                });
            }
        });
    });
}
function showCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
//# sourceMappingURL=index.js.map