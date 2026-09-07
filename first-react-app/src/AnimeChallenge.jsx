import './App.css'
import { useState, useEffect } from 'react'

function AnimeChallenge() {
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("")
  const [im, setIm] = useState("")
  const [score, setScore] = useState(1.0)
  const [epiCount, setEpiCount] = useState(0)
  const [syn, setSyn] = useState("")
  const [error, setError] = useState("")
  const [id, setId] = useState(1)
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP Error" + res.status)
        }
        return (res.json())
      }
      )

      .then(data => {
        const anime = data.data
        console.log(anime.title)
        setTitle(anime.title)
        setIm(anime.images.jpg.large_image_url)
        setScore(anime.score)
        setEpiCount(anime.episodes)
        setSyn(anime.synopsis)
        setError("")

      })
      .catch((err => {
        setTitle("ERROR")
        setIm("0")
        setScore("0")
        setEpiCount("0")
        setSyn("Anime Not Found")
        setError(err.message)
      }))
  }, [id])
  return (
    <div className="cyber-container">
      <h1 className="header">Anime Intel Terminal ⛩️📺</h1>
      <input type="number" placeholder='1,2,3,4,5....' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setId(search)}>Search </button>
      <h1>Title: {title}</h1>
      <img style={{ width: "100%", maxWidth: "200px", height: "auto", maxHeight: "280px", objectFit: "cover", borderRadius: "24px" }} src={im} alt={title} />
      <p>Score: {score}</p>
      <p>Episodes: {epiCount}</p>
      <p>Synopsis: <span style={{ color: "cyan" }}>{syn}</span></p>
      <p className='ifZero'>{error}</p>
    </div>
  )
}

export default AnimeChallenge
