import { getImages } from "./js/pixabay-api";

const form = document.querySelector(".container")
const searchTerm = document.querySelector(".searchTerm");
const gallery = document.querySelector(".gallery");
form.addEventListener("submit", onFormSubmit);
const galleryItem = document.querySelector("gallery-item")
// galleryItem.addEventListener("")

function onFormSubmit(e) {
    e.preventDefault();
    getImages(searchTerm.value, gallery);
}