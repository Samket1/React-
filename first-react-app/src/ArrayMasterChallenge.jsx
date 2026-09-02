import './App.css'
import { useState } from 'react'

function ArrayMasterChallenge() {
  const [playlist, setPlayList] = useState(["🎵 Blinding Lights", "🎸 Bohemian Rhapsody", "⚡ Thunderstruck"])
  const [newPlaylist, setNewPlayList] = ("")
  return (
    <div className="container">
      <h1 className="header">RPG Inventory & Loot Bag Challenge 🎒⚔️</h1>
      {playlist.map(
        (play, index) => (
          <div className='card' key={index}>
            {play}
            <button onClick={() => setPlayList(playlist.filter((_, i) => (i !== index)))}>🗑️</button>
          </div>
        )
      )}


    </div>
  )
}

export default ArrayMasterChallenge
