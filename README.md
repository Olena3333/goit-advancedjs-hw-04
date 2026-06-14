# GoIT Advanced JS — Homework 3

**Author:** Olena Solonikova

## Image Search Application

This project is a web application for searching and displaying images using the **Pixabay REST API**. Users can enter a keyword, submit the search form, and browse the matching results in a responsive gallery.

### Live Demo

https://olena3333.github.io/goit-advancedjs-hw-03/

---

# Project Objective

The main goal of this assignment is to create a frontend application that communicates with the public **Pixabay API** and dynamically renders image search results.

---

# Application Features

## Search Form

The interface includes:

* a text input for entering a search request;
* a submit button that starts the search process.

When the form is submitted, the application sends an HTTP request to Pixabay with the following parameters:

* `key` — personal API key;
* `q` — user search query (URL encoded);
* `image_type=photo` — returns only photographs;
* `orientation=horizontal` — limits results to horizontal images;
* `safesearch=true` — filters out unsafe content.

---

## Image Gallery

Search results are displayed as a responsive gallery of image cards.

Each card contains:

* preview image;
* number of likes;
* number of views;
* number of comments;
* number of downloads.

---

## Lightbox Preview

Selecting an image opens the original version inside a lightbox using **SimpleLightbox**, allowing users to browse images in a larger format.

---

## Notifications

If the search returns no matching images, the application displays an **iziToast** notification similar to:

```id="k2iz5g"
Sorry, there are no images matching your search query. Please try again!
```

---

## Loading Indicator

While data is being fetched from the API, a loading spinner or indicator is shown to inform the user that the request is in progress.

---

# Project Structure

The codebase is organized into separate modules for better readability and maintainability.

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

* **pixabay-api.js** handles communication with the Pixabay service.
* **render-functions.js** contains helper functions responsible for rendering gallery elements in the DOM.

---

# Technology Stack

* Vite
* Vanilla JavaScript (ES Modules)
* HTML5
* CSS3
* Pixabay REST API
* SimpleLightbox
* iziToast

---

# Installation

Install all project dependencies:

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

Create an optimized production build by running:

```bash
npm run build
```

The compiled files will be generated inside the `dist/` directory and configured for deployment to:

```text
/goit-advancedjs-hw-03/
```

---

# Local Preview

To preview the production version locally, execute:

```bash
npm run preview
```

---

# Summary

This project demonstrates practical work with asynchronous JavaScript, REST API requests, modular architecture, DOM manipulation, and third-party libraries for notifications and image previews.

