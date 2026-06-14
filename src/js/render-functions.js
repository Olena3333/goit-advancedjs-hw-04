import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const LIGHTBOX_OPTIONS = {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
};

function makeLightbox() {
    const lb = new SimpleLightbox('.gallery a', LIGHTBOX_OPTIONS);
    lb.refresh = () => {
        lb.destroy();
        lightbox = makeLightbox();
    };
    return lb;
}

let lightbox = makeLightbox();

export function createGallery(images) {
    const markup = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>Likes</h2>
                    <p>${likes}</p>
                </div>
                <div class="column">
                    <h2>Views</h2>
                    <p>${views}</p>
                </div>
                <div class="column">
                    <h2>Comments</h2>
                    <p>${comments}</p>
                </div>
                <div class="column">
                    <h2>Downloads</h2>
                    <p>${downloads}</p>
                </div>
            </div>
        </li>`
        )
        .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.add('is-active');
}

export function hideLoader() {
    loader.classList.remove('is-active');
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.add('is-visible');
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.remove('is-visible');
}