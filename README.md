# 🎬 Movie Search Engine (React)

A clean and responsive movie discovery app built with React, allowing users to search films, browse trending titles, and save favorites using global state management.
This project demonstrates frontend engineering, API integration, and user-centric UI design following modern React best practices.

[🌐 Live Demo](reactmoviesearchengine.netlify.app)

---

## 📸 Screenshot

![Move Search Engine Screenshot](Screenshot.JPG)

--- 

## 🎯 Features

- 🔍 Search Movies — Search any movie using The Movie Database (TMDB) API

- 🎞️ Browse Popular Movies — Automatically loads trending movies on homepage

- ❤️ Favorites System — Add or remove movies from your favorites list

- 🧠 Global State Management — App-wide favorites logic using a custom React Context

- 🔄 Real-Time Filtering — Instant search filtering on both the Home and Favorites pages

- 🧱 Responsive UI — Clean layout styled with custom CSS for a smooth, modern feel

- 🌐 Dynamic Routing — Navigation powered by React Router (Home & Favorites routes)

---

## 🛠️ Tech Stack

- React 19 — Frontend library
- React Router DOM — Client-side routing
- Vite — Fast development build tool
- TMDB API — External API for movie data
- CSS3 — Custom styles for layout and design

---

## 🚀 Getting Started

To run this app locally:

### 1. Clone the repository

git clone https://github.com/zandernh/react-movie-search-engine.git

cd react-movie-search-engine

### 2. Install dependencies

npm install

### 3. Start the development server

npm run dev

### 4. Access the app at:

http://localhost:5173

---

## 🧠 How It Works

- The app fetches popular movies on page load using getPopularMovies().
- Users can search for films via TMDB using searchMovies().
- Movie results are displayed as cards with poster, title, and release year.
- Clicking the heart ♥ icon adds/removes a movie from the Favorites Context.
- The Favorites page collects all saved movies for easy viewing.
- All UI updates occur instantly through React state and context.

---

## ☁️ API Setup

This project uses the TMDB API, which requires an API key.

---

## 📦 Deployment

The app is deployed on Netlify.

---

## 📄 License

This project is open-source and free to use under the MIT Licence.

---

## 🙋‍♂️ Author

Built with ❤️ by Zander Harding
