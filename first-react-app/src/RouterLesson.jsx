import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import './App.css'

// 1. Mini-Pages to switch between:
function MovieDetails() {
    const { title } = useParams()
    const navigate = useNavigate()
    return <div>
        <h3>🎬 Now Streaming: {title}</h3>
        <button onClick={() => { navigate("/movies") }}>⬅️ Back to Movies</button>
    </div>

}
function HomeView() {
    return <h2>🏠 Welcome to the Movie Lobby!</h2>
}

function MoviesView() {
    return (
        <div>
            <h2>🎬 Browse All Streaming Movies</h2>
            <Link to="/movies/Inception" className="btn">Inception</Link>
            <Link to="/movies/Interstellar" className="btn">Interstellar</Link>
            <Link to="/movies/The-Dark-Knight" className="btn">The Dark Knight</Link>
        </div>)
}

function AboutView() {
    return <h2>ℹ️ About StreamGit Platform</h2>
}

// 2. Main Router Component:
function RouterLesson() {
    return (
        <div className="card">
            <h1 className="header">🧭 React Router Multi-Page Lab</h1>
            <p className="subtitle">Instant Navigation with Zero Page Reloads</p>

            {/* 3. Your Navbar Links go here */}
            <div className=" hud-row">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/movies">Movies</Link>
                <Link className="btn" to="/about">About</Link>

            </div>
            {/* 4. Your <Routes> Traffic Controller goes here */}
            <Routes >
                <Route path="/" element={<HomeView />} />
                <Route path="/movies" element={<MoviesView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/movies/:title" element={<MovieDetails />} />
            </Routes>

        </div>
    )
}

export default RouterLesson
