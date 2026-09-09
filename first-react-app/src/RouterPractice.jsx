import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import './App.css'
function Details() {
    const { genre } = useParams()
    const back = useNavigate()
    return (
        <div>
            <h2>▶️ NOW PLAYING: {genre}</h2>
        </div>
    )
}
function Audio_l() {
    return (
        <div>
            <h2>🎧 Cyberpunk Audio Library</h2>
            <Link className='btn' to="/audiol/neon">Neon Overdrive</Link>
            <Link className='btn' to="/audiol/synthwaav">Synthwave Sunset</Link>
            <Link className='btn' to="/audiol/midnight">Midnight Runner</Link>


        </div>
    )
}
function RouterPractice() {
    return (
        <div className="card">
            <h1 className="header">🎧 Cyberpunk Audio Deck</h1>
            <p className="subtitle">Mastering Dynamic URL Routes & useParams</p>
            <Link className='btn' to="/audiol">Music Library</Link>
            <Routes>
                <Route path="/audiol" element={<Audio_l />} />
                <Route path="/audiol/:genre" element={<Details />} />
            </Routes>
        </div>
    )
}

export default RouterPractice
