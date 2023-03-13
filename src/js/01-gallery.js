// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryImages = makeGalleryImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryImages);

function makeGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
}

//Lightbox Gallery
let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryLightbox.on("show.simplelightbox");
