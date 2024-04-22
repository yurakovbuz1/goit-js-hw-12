// зберігай функції для HTTP-запитів.
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery, renderLoadBtn } from "./render-functions";
import axios from 'axios';

const MY_KEY = "43507759-1cdf1229fe6b1935ead7e315b";
const loading = `<span class="loader"></span>`;

let page = 1;
const per_page = 15;
let totalPages;

async function getFirstImages(searchTerm, gallery, loadContainer) {
    page = 1;

    gallery.innerHTML = loading;
    try {
        const { data } = await axios('https://pixabay.com/api/', {
            params: {
                key: MY_KEY,
                q: searchTerm,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page,
                page
            }
        });
        totalPages = Math.ceil(data.totalHits / per_page);
        
        if (data.hits.length === 0) {
            gallery.innerHTML = "";
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" })
        } else {
            renderGallery(data.hits, gallery);
            renderLoadBtn(totalPages, loadContainer, page);
        }
    } catch (error) {
        iziToast.error({ message: error.message })
    }
}

// function getNextImages() {

// }

export { getFirstImages };