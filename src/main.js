import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

const END_OF_RESULTS_MESSAGE =
    "We're sorry, but you've reached the end of search results.";

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

function notifyEndOfResults() {
    iziToast.info({
        message: END_OF_RESULTS_MESSAGE,
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#6366f1',
        timeout: 3000,
    });
}

function notifyError(message) {
    iziToast.error({
        message,
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#EF4040',
        timeout: 3000,
    });
}

form.addEventListener('submit', async event => {
    event.preventDefault();

    const query = event.target.elements['search-text'].value.trim();
    if (!query) return;

    currentQuery = query;
    currentPage = 1;
    totalHits = 0;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            notifyError(
                'Sorry, there are no images matching your search query. Please try again!'
            );
            return;
        }

        createGallery(data.hits);

        if (currentPage * PER_PAGE < totalHits) {
            showLoadMoreButton();
        } else {
            notifyEndOfResults();
        }
    } catch {
        notifyError('Something went wrong. Please try again later.');
    } finally {
        hideLoader();
        form.reset();
    }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);

        const firstCard = gallery.firstElementChild;
        if (firstCard) {
            const { height } = firstCard.getBoundingClientRect();
            window.scrollBy({ top: height * 2, behavior: 'smooth' });
        }

        if (currentPage * PER_PAGE >= totalHits) {
            notifyEndOfResults();
        } else {
            showLoadMoreButton();
        }
    } catch {
        notifyError('Something went wrong. Please try again later.');
    } finally {
        hideLoader();
    }
});