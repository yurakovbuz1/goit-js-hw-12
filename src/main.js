import { getFirstImages, getNextImages } from "./js/pixabay-api";

const form = document.querySelector(".container")
const searchTerm = document.querySelector(".searchTerm");
const gallery = document.querySelector(".gallery");
form.addEventListener("submit", onFormSubmit);
const loadContainer = document.querySelector(".load-container");
loadContainer.addEventListener("click", onLoadClick)



function onFormSubmit(e) {
    e.preventDefault();
    getFirstImages(searchTerm.value, gallery, loadContainer);
}

function onLoadClick(e) {
    if (e.target.nodeName != "BUTTON") return;
    e.preventDefault();
    getNextImages(gallery, loadContainer);
}