import './App.css'
import { useState, useEffect } from 'react'

function RickMortyChallenge() {
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")
  const [image, setImage] = useState("")
  const [status, setStatus] = useState("")
  const [origin, setOrigin] = useState("")
  const [species, setSpecies] = useState("")
  const [id, setId] = useState("1")
  const [er, setErr] = useState("")
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP Error" + res.status)
        }
        return res.json()
      })

      .then(data => {
        setName(data.name)
        setImage(data.image)
        setStatus(data.status)
        setOrigin(data.origin.name)
        setSpecies(data.species)
        setErr("")

      })
      .catch(err => {
        setName("Subject Not Found ❌")
        setImage("")
        setStatus("")
        setOrigin("")
        setSpecies("")
        setErr(err.message)

      })
  }, [id])

  return (
    < div className="cyber-container" >
      <h1 className="header">Multiverse Scanner 🌀🧪</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setId(search)}>Search</button>
      <div>

        <img style={{ borderRadius: "50px", width: "150px", height: "150px" }} src={image} alt="blla bal" />
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin}</p>
        {er && <p className='ifZero'> {er}</p>}

      </div>

    </div >
  )
}

export default RickMortyChallenge
