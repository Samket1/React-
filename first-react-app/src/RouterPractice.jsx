import './App.css'
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom"
function Loading() {
    const { BattleMode } = useParams()
    const back = useNavigate()
    return (
        <div>
            <h2>⚔️ LOADING MATCH: {BattleMode}!</h2>
            <button onClick={() => back("/arena")}>⬅️ Back to Arena</button>
        </div>
    )
}
function Lobby() {
    return (
        <h2>🏰 Welcome to the Fighter Lobby!</h2>
    )
}
function Arena() {
    return (
        <div>
            <h2>⚔️ Choose Your Battle Mode in the Arena!</h2>
            <div>
                <Link className='btn' to="/arena/1v1-Duel">1v1 Duel</Link>
                <Link className='btn' to="/arena/Battle-Royale">Battle Royale</Link>
                <Link className='btn' to="/arena/Boss-Raid">Boss Raid</Link>
            </div>

        </div>
    )
}
function RouterPractice() {
    return (
        <div className="card">
            <h1 className="header">🔥 Warm-up Arena: Multi-Page Routing</h1>
            <p className="subtitle">From Scratch Warm-up: Connecting URLs, Views & Dynamic Params</p>
            <div>
                <Link className='btn' to="/lobby">Lobby</Link>
                <Link className='btn' to="/arena">Arena</Link>
            </div>

            <div>
                <Routes>
                    <Route path="/lobby" element={<Lobby />} />
                    <Route path="/arena" element={<Arena />} />
                    <Route path="/arena/:BattleMode" element={<Loading />} />

                </Routes>
            </div>
        </div>
    )
}

export default RouterPractice
