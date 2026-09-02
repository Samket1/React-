import './App.css'
import { useState } from 'react'

// 1. Reusable Child Component for each bounty card
function QuestCard(props) {
  return (
    <div className="cyber-card">
      <div>
        <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{props.title}</h3>
        <span style={{ fontSize: "0.85rem", color: "#38bdf8", fontFamily: "monospace" }}>
          Bounty Reward: +500 ₵
        </span>
      </div>
      <div>
        <button className="btn btn-complete" onClick={props.onComplete}>
          ✅ Complete
        </button>
        <button className="btn btn-abandon" onClick={props.onAbandon}>
          ❌ Abandon
        </button>
      </div>
    </div>
  )
}

// 2. Main Terminal Component
function BossDemo() {
  const [credits, setCredits] = useState(0)
  const [stealthMode, setStealthMode] = useState(false)
  const [newQuest, setNewQuest] = useState("")
  const [bounties, setBounties] = useState([
    "💾 Infiltrate Megacorp Server",
    "🚁 Hack Orbital Shuttle",
    "🤖 Neutralize Rogue Android"
  ])

  return (
    // Dynamic styling: swaps between cyber-stealth and cyber-combat
    <div className={`cyber-container ${stealthMode ? 'cyber-stealth' : 'cyber-combat'}`}>
      <h1 className="header" style={{ textAlign: "center" }}>Cyberpunk Bounty HQ 🦾⚡</h1>

      {/* HUD Row with live stats and mode toggle */}
      <div className="hud-row">
        <span className="hud-badge">🪙 Credits: {credits} ₵</span>
        <span className="hud-badge" style={{ borderColor: "#a855f7", color: "#a855f7" }}>
          🎯 Active: {bounties.length}
        </span>
        <button 
          className="btn" 
          onClick={() => setStealthMode(!stealthMode)}
        >
          {stealthMode ? "🕶️ Stealth Active" : "🚨 Combat Active"}
        </button>
      </div>

      {/* Input Section to add new bounties */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="New contract objective..." 
          value={newQuest} 
          onChange={(e) => setNewQuest(e.target.value)} 
        />
        <button 
          className="btn"
          style={{ whiteSpace: "nowrap" }}
          onClick={() => {
            if (newQuest.trim() !== "") {
              setBounties([...bounties, newQuest])
              setNewQuest("")
            }
          }}
        >
          ➕ Accept Contract
        </button>
      </div>

      {/* List of Bounty Cards rendered via .map() */}
      {bounties.map((bounty, index) => (
        <QuestCard 
          key={index}
          title={bounty}
          onComplete={() => {
            setCredits(credits + 500)
            setBounties(bounties.filter((_, i) => i !== index))
          }}
          onAbandon={() => {
            setBounties(bounties.filter((_, i) => i !== index))
          }}
        />
      ))}

      {/* Notice shown when all bounties are cleared */}
      {bounties.length === 0 && (
        <p style={{ textAlign: "center", color: "#94a3b8", marginTop: "24px", fontSize: "1.1rem" }}>
          🛡️ All bounties cleared! Sector secured.
        </p>
      )}
    </div>
  )
}

export default BossDemo
