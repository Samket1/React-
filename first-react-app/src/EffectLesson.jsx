import './App.css'
import { useState, useEffect } from 'react'

function EffectLesson() {
  const [pokemon, setPokemon] = useState("")
  const [imgp, setImgp] = useState("")
  const [id, setId] = useState("1")
  const [search, setSearch] = useState("")
  const [er, setEr] = useState("")
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP Error " + res.status)
        }
        return (res.json())
      })
      .then(data => {
        setPokemon(data.name)
        setImgp(data.sprites.front_default)
        setEr("")

      })
      .catch(err => {
        setPokemon("Creature Not Found ❌")
        setImgp("")
        setEr(err.message)
      })
  }, [id]
  )
  return (
    <div className="cyber-container">
      <h1 className="header">Lesson 6: useEffect & APIs ⚡</h1>
      <input type="text" placeholder='1,2,3,4... or charmeleon, ivysaur

...' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setId(search)}>Search</button>

      <div className='cyber-container'>
        <img className="card" src={imgp} alt=".   No Creature To Display" style={{ width: "100px", height: "100px" }} />
        <p className='hud-badge'>Name: {pokemon}</p>
        <p className='hud-badge'>ID: {id}</p>
        <p className='ifZero'>{er}</p>
      </div>
    </div>
  )
}

export default EffectLesson