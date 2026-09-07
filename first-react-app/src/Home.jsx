import { useState } from 'react'
import './App.css'
import FoodChallenge from './FoodChallenge'
import AnimeChallenge from './AnimeChallenge'
function Home() {
    const [tab, setTab] = useState("")
    return (
        <div>
            <nav>
                <button onClick={() => setTab("food")}>Food</button>
                <button onClick={() => setTab("anime")}>Anime</button>
            </nav>
            {tab === "food" && <FoodChallenge />}
            {tab === "anime" && <AnimeChallenge />}

        </div>
    )
}
export default Home