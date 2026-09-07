import { useState } from 'react'
import './App.css'
import FoodChallenge from './FoodChallenge'
import AnimeChallenge from './AnimeChallenge'
function Home() {
    const [tab, setTab] = useState("")
    return (
        <div>
            <nav>
                <button onClick={() => setTab("anime")}>Anime</button>
                <button onClick={() => setTab("food")}>Food</button>
            </nav>
            {tab === "anime" && <AnimeChallenge />}

            {tab === "food" && <FoodChallenge />}

        </div>
    )
}
export default Home