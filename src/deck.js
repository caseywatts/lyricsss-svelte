import { init } from "svelte/internal";
import { draw } from "svelte/types/runtime/transition";
import initial_deck from "./pruned650words.json";

class Deck {
    constructor() {
        this.deckContents = initial_deck;
    }
    get length() {
        return this.deckContents.length;
    }
    drawCard() {
        return this.deckContents.pop();
    }
}

const deck = new Deck();
export { deck };