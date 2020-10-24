import initial_deck from "./pruned650words.json";

class Deck {
    constructor() {
        this.deckContents = randomize(initial_deck);
    }
    get length() {
        return this.deckContents.length;
    }
    drawCard() {
        return this.deckContents.pop();
    }
}

function randomize(words) {
    return words.sort(function () {
        return Math.random() - 0.5;
    });
}

const deck = new Deck();
export { deck };