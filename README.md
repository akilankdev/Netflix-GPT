# NetflixGPT 🎬

A Netflix-inspired movie and TV show discovery application built using **React**, **Redux Toolkit**, **Tailwind CSS**, and **Firebase**, with AI-powered movie recommendations using **Google Gemini**.

Explore movies and TV shows, watch trailers, view detailed information, and discover movies through an AI-powered search experience.

🌐 **Live Demo:** https://netflix-gpt-flax-zeta.vercel.app/

## ✨ Features

- **User Authentication:** Sign up, log in, and log out using Firebase Authentication.
- **Browse Movies & TV Shows:** Explore popular, top-rated, and upcoming movies.
- **Movie & Show Trailers:** Open and watch movie trailers on YouTube by clicking the Play Trailer button.
- **Show Details:** View detailed information about individual movies and TV shows.
- **GPT Movie Search:** Get movie recommendations using Google Gemini.
- **Multi-language Support:** Switch between English and Tamil.
- **Responsive UI:** Netflix-inspired interface built with Tailwind CSS.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Lucide React

**Backend**
- Node.js
- Express.js
- TMDB API
- Google Gemini API

**Authentication & Deployment**
- Firebase Authentication
- Vercel (Frontend)
- Render (Backend)

## 🏗️ Architecture

NetflixGPT uses a React frontend that communicates with a custom Express.js backend.

The backend acts as a proxy between the frontend and external APIs, handling requests to TMDB and Google Gemini.

Firebase Authentication handles user authentication, while Redux Toolkit manages application-level state.

### Application Flow

1. Users authenticate through Firebase.
2. The React application fetches movie and TV show data through the Express backend.
3. Redux Toolkit manages and shares application state.
4. Users can explore shows, view details, and watch trailers.
5. Gemini processes movie-search prompts and generates recommendations.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- TMDB API access token
- Google Gemini API key
- Firebase project

### 1. Clone the Repository

```bash
git clone https://github.com/akilankdev/netflix-gpt.git
cd netflix-gpt
```

### 2. Setup the Backend

```bash
cd tmdb-proxy
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
TMDB_ACCESS_TOKEN=your_tmdb_access_token
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm start
```

### 3. Setup the Frontend

Open another terminal from the project root:

```bash
cd netflix-gpt
npm install
```

Configure the required Firebase environment variables and backend URL in your frontend `.env` file.

Start the React development server:

```bash
npm start
```

The frontend will be available at:

`http://localhost:3000`

## 🔑 APIs & Services

- **TMDB API:** Movie and TV show information, posters, backdrops, and trailers.
- **Google Gemini API:** AI-powered movie recommendations.
- **Firebase:** User authentication.

## 📸 Screenshots

_Add screenshots of your application here._

Suggested screenshots:
- Login Page
- Browse Page
- Movie Details Page
- GPT Search Page

## 👨‍💻 Author

**Akilan K**

- GitHub: [@akilankdev](https://github.com/akilankdev)

---

*Built as a hands-on full-stack development project to strengthen my understanding of React, state management, backend development, API integration, and AI-powered applications.*
