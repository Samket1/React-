import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

function Ship_Specs_Title() {
    const { shipName } = useParams()


    const back = useNavigate()
    return (
        <div>
            <h2>🛸 Vessel Diagnostics Active: {shipName}</h2>
            <button onClick={() => back("/commandbridge")}>⬅️ Return to Hangar</button>
        </div>
    )
}
// 🚀 Quest Theme: Galactic Starfleet Academy Terminal!
function Command_Bridge() {
    return (
        <h2> 🚀 Welcome to the Command Bridge, Captain Skate. All systems operational.</h2>
    )

}

function Starship_Hangar() {
    return (<div>
        <h2>🛸 Starfleet Hangar: Select a Vessel to Inspect</h2>
        <Link className="btn" to="/starship_hanga/Millennium_Falcon">Millennium Falcon</Link>
        <Link className="btn" to="/starship_hanga/USS_Enterprise">USS Enterprise</Link>
        <Link className="btn" to="/starship_hanga/X-Wing_Fighter">X-Wing Fighter</Link>
    </div>

    )
}

function Restricted_Sector() {
    const navigate = useNavigate()
    return (
        <div>
            <h2>🚨 RED ALERT! Sector 0 is Classified!</h2>
            <p>Access granted only to Starfleet Admirals.</p>
            <button className="btn" onClick={() => navigate("/commandbridge")}>
                🏃 Return to Command Bridge
            </button>
        </div>
    )
}

function RouterChallenge() {
    return (
        <div className="card">
            <h1 className="header">🌌 Starfleet Academy Terminal</h1>
            <p className="subtitle">Mastering Multi-Page Routing & Navigation</p>

            {/* Build your Terminal Navigation & Routes below! */}
            <div className='hud-row'>

                <Link className="btn" to="/commandbridge">Command Bridge</Link>
                <Link className="btn" to="/starship_hanga">Starship Hanga</Link>
                <Link className="btn" to="/sector"> Sector 0</Link>
            </div>
            <Routes>
                <Route path="/starship_hanga/:shipName" element={<Ship_Specs_Title />} />

                <Route path="/commandbridge" element={<Command_Bridge />} />
                <Route path="/starship_hanga" element={<Starship_Hangar />} />
                <Route path="/sector" element={<Restricted_Sector />} />

            </Routes>
        </div>
    )
}

export default RouterChallenge
