import './App.css'
import { useState } from 'react'

function QuestCard(props) {
  return (
    <div className="cyber-card">
      <p>Mission: {props.title}</p>
      <button className='btn btn-complete' onClick={props.onComplete}>Complete</button>
      <button className='btn btn-abandon' onClick={props.onAbandon}>Abandon</button>
    </div >

  )
}

function BossChallenge() {
  const [credits, setCredits] = useState(0)
  const [stealthMode, setStealthMode] = useState(false)
  const [newQuest, setNewQuest] = useState("")
  const [bounties, setBounties] = useState(["💾 Infiltrate Megacorp Server", "🚁 Hack Orbital Shuttle", "🤖 Neutralize Rogue Android"])
  return (
    <div className={`cyber-container ${stealthMode ? " cyber-stealth " : "cyber-combat"}`}>

      <h1 className="header">Cyberpunk Bounty HQ 🦾⚡</h1>

      <div className="hud-row">
        <p className='hud-badge' >🪙 Credits: {credits} ₵</p>
        <p className='hud-badge' >🎯 Active: {bounties.length}</p>
        <button className='btn' onClick={() =>
          setStealthMode(!stealthMode)}>
          {stealthMode ? "🚨 Combat Active" : "🕶️ Stealth Active"}
        </button>
      </div>

      <input type='text' placeholder='Enter contract objective...' className="input-field" value={newQuest} 
      onChange={(e) => setNewQuest(e.target.value)} />
      <button className='btn' onClick={() => {
        setBounties([...bounties, newQuest])
        setNewQuest("")
      }}>Accept Contract</button>

      {bounties.map((T, index) =>
        < QuestCard key={index} title={T}
          onComplete={() => {
            setCredits(credits + 500)
            setBounties(bounties.filter((_, i) => (i !== index)))
          }}
          onAbandon={() => setBounties(bounties.filter((_, i) => i !== index))}
        />
      )}
      <p style={{ marginTop: "20px", color: "grey" }}>{bounties.length === 0 && "...EMPTY..."}</p>
    </div>
  )
}

export default BossChallenge
