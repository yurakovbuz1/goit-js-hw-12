// зберігай функції для HTTP-запитів.
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery } from "./render-functions";

const MY_KEY = "43507759-1cdf1229fe6b1935ead7e315b";

function getImages(searchTerm, gallery) {
    const options = new URLSearchParams({
        key: MY_KEY,
        q: searchTerm,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    gallery.innerHTML = `<span class="loader"></span>`
    fetch(`https://pixabay.com/api/?${options}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(response => {
            if (response.hits.length === 0) {
                gallery.innerHTML = "";
                iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" })
            } else {
                renderGallery(response.hits, gallery);
            }
        })
        .catch(error => console.log("ERROR", error));
}

export { getImages };