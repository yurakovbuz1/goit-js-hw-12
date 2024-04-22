// створи функції для відображення елементів інтерфейсу
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: "alt",
        captionDelay: 250
    });

const per_page = 15;

function renderGallery(hits, gallery) {
    gallery.innerHTML = hits.map((pic) => `
      <li class="gallery-item">
        <a href="${pic.largeImageURL}">
          <img class="gallery-image" src="${pic.webformatURL}" alt="${pic.tags}" />
        </a>
        <div class="info">
          <div class="field">
            <b class="label">Likes</b>
            <span class="value" data-likes>${pic.likes}</span>
          </div>
          <div class="field">
            <b class="label">Views</b>
            <span class="value" data-views>${pic.views}</span>
          </div>
          <div class="field">
            <b class="label">Commments</b>
            <span class="value" data-commments>${pic.comments}</span>
          </div>
          <div class="field">
            <b class="label">Downloads</b>
            <span class="value" data-downloads>${pic.downloads}</span>
          </div>
        </div>
      </li>`
    ).join("");

    lightbox.refresh();
};

function renderLoadBtn(totalPages, loadContainer) {
  if (totalPages > 1) {
    loadContainer.innerHTML = `<button class="load-button">Load more</button>`;
  } else {
    console.log("HERE");
    loadContainer.innerHTML = "";
  }
}

export { renderGallery,  renderLoadBtn};
