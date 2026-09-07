import { useState, useEffect } from 'react'
import './App.css'

// Foundational State & Input Lessons
import StateLesson from './StateLesson'
import StateChallenge from './StateChallenge'
import InputLesson from './InputLesson'
import InputChallenge from './InputChallenge'

// Lists & Mapping Lessons
import ArrayListLesson from './ArrayListLesson'
import DynamicListLesson from './DynamicListLesson'
import ComponentMappingRevision from './ComponentMappingRevision'
import Revision from './Revision'
import Practice from './Practice'

// The 3 Boss Challenges
import BossChallenge from './BossChallenge'
import TechStoreChallenge from './TechStoreChallenge'
import ArrayMasterChallenge from './ArrayMasterChallenge'
import CargoChallenge from './CargoChallenge'

// API & useEffect Era
import EffectLesson from './EffectLesson'
import RickMortyChallenge from './RickMortyChallenge'
import AnimeChallenge from './AnimeChallenge'
import FoodChallenge from './FoodChallenge'

//if there is an import aafter this just wanna lyk i added it my self and wrote this too

function Home() {
    const [tab, setTab] = useState("food")
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="sidebar-layout">
            {/* 🧭 Left Sidebar Navigation */}
            <nav className="sidebar-nav">
                <h2 className="sidebar-title">⚡ React Lab</h2>

                {/* 1. Basics & State */}
                <span className="sidebar-section-title">STATE & INPUTS</span>
                <button className="sidebar-btn" onClick={() => setTab("state-lesson")}>🌱 State Lesson</button>
                <button className="sidebar-btn" onClick={() => setTab("state-challenge")}>⚡ State Challenge</button>
                <button className="sidebar-btn" onClick={() => setTab("input-lesson")}>⌨️ Input Lesson</button>
                <button className="sidebar-btn" onClick={() => setTab("input-challenge")}>💬 Input Challenge</button>

                {/* 2. Lists & Arrays */}
                <span className="sidebar-section-title">LISTS & ARRAYS</span>
                <button className="sidebar-btn" onClick={() => setTab("array-list")}>📋 Array List</button>
                <button className="sidebar-btn" onClick={() => setTab("dynamic-list")}>🔄 Dynamic List</button>
                <button className="sidebar-btn" onClick={() => setTab("mapping-rev")}>🗺️ Mapping Revision</button>
                <button className="sidebar-btn" onClick={() => setTab("revision")}>📝 Revision</button>
                <button className="sidebar-btn" onClick={() => setTab("practice")}>🎯 Practice</button>

                {/* 3. The 3 Boss Challenges */}
                <span className="sidebar-section-title">BOSS QUESTS</span>
                <button className="sidebar-btn" onClick={() => setTab("boss-1")}>⚔️ Boss 1 (RPG Quest)</button>
                <button className="sidebar-btn" onClick={() => setTab("boss-2-tech")}>💻 Boss 2 (Tech Store)</button>
                <button className="sidebar-btn" onClick={() => setTab("boss-2-array")}>👑 Boss 2 (Array Master)</button>
                <button className="sidebar-btn" onClick={() => setTab("boss-3-cargo")}>📦 Boss 3 (Cyber Cargo)</button>

                {/* 4. API & useEffect Series */}
                <span className="sidebar-section-title">APIs & USE_EFFECT</span>
                <button className="sidebar-btn" onClick={() => setTab("effect-lesson")}>⚡ Effect Lesson (PokeAPI)</button>
                <button className="sidebar-btn" onClick={() => setTab("rnm")}>🧪 Rick & Morty Scanner</button>
                <button className="sidebar-btn" onClick={() => setTab("anime")}>⛩️ Anime Intel</button>
                <button className="sidebar-btn" onClick={() => setTab("food")}>🍳 Recipe Vault</button>
            </nav>

            {/* 🖥️ Main Content Area on the Right */}
            <main className="sidebar-main">
                {tab === "state-lesson" && <StateLesson />}
                {tab === "state-challenge" && <StateChallenge />}
                {tab === "input-lesson" && <InputLesson />}
                {tab === "input-challenge" && <InputChallenge />}

                {tab === "array-list" && <ArrayListLesson />}
                {tab === "dynamic-list" && <DynamicListLesson />}
                {tab === "mapping-rev" && <ComponentMappingRevision />}
                {tab === "revision" && <Revision />}
                {tab === "practice" && <Practice />}

                {tab === "boss-1" && <BossChallenge />}
                {tab === "boss-2-tech" && <TechStoreChallenge />}
                {tab === "boss-2-array" && <ArrayMasterChallenge />}
                {tab === "boss-3-cargo" && <CargoChallenge />}

                {tab === "effect-lesson" && <EffectLesson />}
                {tab === "rnm" && <RickMortyChallenge />}
                {tab === "anime" && <AnimeChallenge />}
                {tab === "food" && <FoodChallenge />}
            </main>
        </div>
    )
}

export default Home