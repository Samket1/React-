import { useState, useEffect } from 'react'
import './App.css'

function TimeoutChallenge() {
    // 💣 Challenge Goal: Build a Bomb Defusal / Auto-Dismiss Alert!
    // 1. A state for a message or alert (e.g. showBomb, or alertText)
    // 2. A useEffect with setTimeout to blow up or dismiss after 3000ms (3 seconds)
    // 3. The cleanup clearTimeout to defuse it if cancelled!

    return (
        <div className="card">
            <h1 className="header">💣 Bomb Defusal Lab (setTimeout)</h1>
            <p className="subtitle">Mastering setTimeout & clearTimeout Wire-Cutting</p>

        </div>
    )
}

export default TimeoutChallenge
