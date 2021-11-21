// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const galerryMarkup = createGalleryItemMarkup(galleryItems);

galerryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

function createGalleryItemMarkup(images) {
    return images
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image lazyload" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
    disableRightClick: true,
     scrollZoom: false,
     captionDelay: 250,
     captionsData: 'alt', 
 }); 
