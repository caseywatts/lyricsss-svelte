import { writable } from "svelte/store";
import initial_deck from "./pruned650words.json";

let deckContents = writable(initial_deck);

export { deckContents };