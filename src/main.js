import { getFirstImages } from "./js/pixabay-api";

const form = document.querySelector(".container")
const searchTerm = document.querySelector(".searchTerm");
const gallery = document.querySelector(".gallery");
form.addEventListener("submit", onFormSubmit);
// const newLoadBtn = `<button class="load-button">Load more</button>`;
const loadContainer = document.querySelector(".load-container");



function onFormSubmit(e) {
    e.preventDefault();
    getFirstImages(searchTerm.value, gallery, loadContainer);
}

function onLoadClick(e) {

}