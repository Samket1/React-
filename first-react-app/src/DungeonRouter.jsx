import './App.css'
import { Route, Routes, Link, useNavigate, useParams } from 'react-router-dom'
function Chamber() {
    const { roomName } = useParams()
    const back = useNavigate()
    return (
        <div>
            <h2>⚔️ Exploring Chamber: {roomName}!</h2>

            <button onClick={() => back("/entrance")}>🏃 Retreat to Entrance"</button>
        </div>
    )
}
function Entrance() {
    return (
        <div>
            <h2>"🏰 You stand at the Dungeon Gate. Pick a dungeon chamber to explore: </h2>
            <div>
                <Link className='btn' to="/entrance/Dragon-Lair"> Dragon-Lair </Link>
                <Link className='btn' to="/entrance/Goblin-Mine"> Goblin-Mine </Link>
                <Link className='btn' to="/entrance/Treasury-Vault"> Treasury-Vault</Link>
            </div>

        </div>
    )
}
function DungeonRouter() {
    return (
        <div className="card">
            <h1 className="header">🏰 Dungeon Crawler: Final Router Trial</h1>
            <p className="subtitle">Prove complete mastery of imports, links, routes, params & navigate</p>
            <div>
                <Link className='btn' to="/entrance">Dungeon Entrance</Link>
            </div>

            <Routes>
                <Route path="/entrance" element={<Entrance />} />
                <Route path="/entrance/:roomName" element={<Chamber />} />
            </Routes>

        </div>
    )
}

export default DungeonRouter
