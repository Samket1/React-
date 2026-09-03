import './App.css'
import { useState } from 'react'
function CargoCard(props) {
  return (
    <div className='cyber-card'>
      <h2>{props.items}</h2>
      <button className='btn btn-complete' onClick={props.Scan}>Scan Crate</button>
      <button className='btn btn-abandon' onClick={props.Jett}>Jettison</button>

    </div>
  )
}
function CargoChallenge() {
  const [fuel, setFuel] = useState(1000)
  const [shieldsUp, setShieldsUp] = useState(true)
  const [newItemName, setNewItemName] = useState("")
  const [cargoList, setCargoList] = useState(["💎 Hyper-Crystals", "🔋 Plasma Cores", "🥩 Synthetic Rations"])
  return (
    <div className={`cyber-container ${shieldsUp ? "cyber-stealth" : "cyber-combat"}`}>
      <h1 className="header">Starship Cargo Hold 🚀📦</h1>
      <div className='hud-row'>
        <p className="hud-badge">⚡ Fuel: {fuel} GW</p>
        <p className="hud-badge">📦 Crates: {cargoList.length}</p>
        <button className='btn' onClick={() => setShieldsUp(!shieldsUp)}>
          {shieldsUp ? "🛡️ Shields Active" : "⚠️ Shields Offline"}
        </button>
      </div>
      <input type='text' placeholder='Add New Item' className='input-field' value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)} />
      <button className='btn' onClick={() => {
        if (newItemName !== "") {
          setCargoList([...cargoList, newItemName])
          setNewItemName("")
        }
      }
      }>Load Cargo</button>
      {cargoList.map((Li, index) =>
        <CargoCard key={index} items={Li}
          Scan={() => setFuel(Math.max(0, shieldsUp ? fuel - 50 : fuel - 100))}
          Jett={() => setCargoList(cargoList.filter((_, i) => i !== index))}
        />)}
      <p className='ifZero'>{cargoList.length === 0 && "🚨 Cargo Bay Decompressed — Bay is Empty!"}</p>
    </div >
  )
}
export default CargoChallenge
