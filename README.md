# GoIT Advanced JS — Homework 4

**Author:** Olena Solonikova

## Image Search Application with Pagination

This project is an enhanced version of the Pixabay image search application. It
allows users to search for photos, browse results in a responsive gallery, and
load additional images using pagination.

### Live Demo

https://olena3333.github.io/goit-advancedjs-hw-04/

---

# Project Description

The application communicates with the **Pixabay REST API** to retrieve images
based on a user's search request. Compared to the previous version, it
introduces **Axios**, **async/await**, pagination support, smooth scrolling, and
an improved user experience.

---

# Main Features

## Image Search

Users can enter a keyword into the search field and submit the form to receive
matching photographs from Pixabay.

Each request includes the following parameters:

- `key` — personal API access key;
- `q` — encoded search query;
- `image_type=photo`;
- `orientation=horizontal`;
- `safesearch=true`;
- `per_page=15`.

---

## Axios and Async/Await

HTTP requests are implemented with the **Axios** library.

All asynchronous operations use modern **async/await** syntax to improve
readability and simplify error handling.

---

# Pagination

The gallery loads **15 images per request**.

Pagination works as follows:

- the initial search starts with `page = 1`;
- every click on **Load more** increases the page number by one;
- submitting a new search resets the page counter back to `1`;
- the current search query is stored so additional requests continue loading the
  same collection.

---

# Load More Button

A dedicated **Load more** button appears beneath the gallery after the first
successful search.

Behavior:

- hidden when no images are displayed;
- shown after results are rendered (if additional pages are available);
- temporarily hidden while a new search is performed;
- disappears automatically when the final page has been reached.

The loading indicator is positioned below the button during data retrieval.

---

# End of Search Results

The application uses the `totalHits` value returned by the Pixabay API to
determine when all available images have been loaded.

When no further pages remain:

- the **Load more** button is hidden;
- an **iziToast** notification informs the user:

```text
We're sorry, but you've reached the end of search results.
```

---

# Smooth Scrolling

After loading another batch of images, the page automatically scrolls down with
a smooth animation.

The scroll distance is calculated using:

- `getBoundingClientRect()` to determine the height of a gallery card;
- `window.scrollBy()` to move approximately two card heights.

---

# Project Structure

The application follows a modular ES Modules architecture.

```text
src/
├── css/
│   ├── reset.css
│   ├── base.css
│   └── styles.css
├── img/
├── js/
│   ├── pixabay-api.js
│   └── render-functions.js
├── index.html
└── main.js
```

### `src/js/pixabay-api.js`

Responsible for communication with the Pixabay API.

Provides:

- `getImagesByQuery(query, page)` — performs an Axios request and returns
  `response.data`.

### `src/js/render-functions.js`

Contains helper functions for UI rendering and the **SimpleLightbox** instance.

Includes:

- `createGallery(images)`
- `clearGallery()`
- `showLoader()`
- `hideLoader()`
- `showLoadMoreButton()`
- `hideLoadMoreButton()`

### `src/main.js`

Contains the core application logic:

- search form handling;
- API requests;
- iziToast notifications;
- pagination management;
- smooth scrolling;
- response validation.

---

# Technologies Used

- Vite
- Vanilla JavaScript (ES Modules)
- Axios
- SimpleLightbox
- iziToast
- HTML5
- CSS3
- Pixabay REST API

---

# Installation

Install project dependencies:

```bash
npm install
```

---

# Development

Run the local development server with hot module replacement:

```bash
npm run dev
```

---

# Production Build

Generate an optimized production build:

```bash
npm run build
```

The compiled project is created inside the `dist/` folder and configured for
deployment to:

```text
/goit-advancedjs-hw-04/
```

---

# Preview

To preview the production build locally:

```bash
npm run preview
```

---

# Submission

The completed homework should include:

- a link to the GitHub repository containing the source code;
- a link to the deployed GitHub Pages version;
- a `.zip` archive of the repository if required by the assignment.

---

# Summary

This project demonstrates practical skills in asynchronous JavaScript, modular
application architecture, working with REST APIs, pagination, dynamic DOM
updates, and integration of third-party libraries such as Axios, SimpleLightbox,
and iziToast.
