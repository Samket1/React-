import './App.css'
import { useState, useEffect } from 'react'

function FoodChallenge() {
  const [name, setName] = useState("")
  const [cat, setCat] = useState("")
  const [or, setOr] = useState("")
  const [im, setIm] = useState("")
  const [ins, setIns] = useState("")
  const [search, setSearch] = useState("")
  const [id, setId] = useState("flan")
  const [Errr, setErrr] = useState("")
  const [Load, setLoad] = useState(true)
  useEffect(() => {
    setLoad(true)

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)

      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP Error" + res.status)
        }
        return res.json()
      })
      .then(data => {
        const food = data.meals[0]

        setLoad(false)
        setName(food.strMeal)
        setCat(food.strCategory)
        setOr(food.strArea)
        setIm(food.strMealThumb)
        setIns(food.strInstructions)
        setErrr("")
      })
      .catch(err => {
        setLoad(false)
        setName("NO FOOD Found")
        setCat("")
        setOr("")
        setIm("")
        setIns("")
        setErrr(err.message)

      }
      )


  }, [id])



  return (
    <div className="cyber-container">
      <h1 className="header">Galactic Recipe Vault 🍳🍕</h1>
      <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
      {Load && <p>🍳 Locating Recipe in Global Vault...</p>}
      <button onClick={() => setId(search)}>Search</button>
      <h2>Name: {name}</h2>
      <img src={im} alt="" style={{ width: "300px", height: "300px" }} />
      <p>Catagory: {cat}</p>
      <p>Origin: {or}</p>
      <p>Instruction: {ins}</p>
      <p className='ifZero'>{Errr}</p>

    </div>
  )
}

export default FoodChallenge
