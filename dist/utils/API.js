var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getEpisodes(page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
        ;
    });
}
export function getCharacters(page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    });
}
export function getLocations(page) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    });
}
//# sourceMappingURL=API.js.map