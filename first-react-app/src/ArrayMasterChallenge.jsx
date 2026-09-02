import './App.css'
import { useState } from 'react'

function ArrayMasterChallenge() {
  const [playlist, setPlayList] = useState(["🎵 Blinding Lights", "🎸 Bohemian Rhapsody", "⚡ Thunderstruck"])
  const [newPlaylist, setNewPlayList] = useState("")
  return (
    <div className="container">
      <h1 className="header">RPG Inventory & Loot Bag Challenge 🎒⚔️</h1>
      <p style={{ color: "#595959ff" }}>Current PlayLists: {playlist.length}</p>
      <input type="text" style={{ fontStyle: "Bold" }} placeholder='New PlayList here...' value={newPlaylist} onChange={(e) => setNewPlayList(e.target.value)} />
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
      <button onClick={() => setPlayList([])}>🗑️ Clear ALL</button>
      <p style={{ color: '#9b9b9bff', opacity: "30%" }}>{playlist.length === 0 && "Your PlayList is Empty"}</p>


    </div>
  )
}

export default ArrayMasterChallenge
