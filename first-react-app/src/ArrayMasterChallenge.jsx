import './App.css'
import { useState } from 'react'

function ArrayMasterChallenge() {
  const [playlist, setPlayList] = useState(["🎵 Blinding Lights", "🎸 Bohemian Rhapsody", "⚡ Thunderstruck"])
  const [newPlaylist, setNewPlayList] = useState("")
  return (
    <div className="container">
      <h1 className="header">RPG Inventory & Loot Bag Challenge 🎒⚔️</h1>
      <input type="text" placeholder='New PlayList here...' value={newPlaylist} onChange={(e) => setNewPlayList(e.target.value)} />
      <button onClick={() => {
        setPlayList([...playlist, newPlaylist])
        setNewPlayList('')
      }}>Add</button>
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
