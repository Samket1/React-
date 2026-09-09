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
import StopwatchChallenge from './StopwatchChallenge'
import TimeoutChallenge from './TimeoutChallenge'
import RouterLesson from './RouterLesson'
import RouterChallenge from './RouterChallenge'
import RouterPractice from './RouterPractice'

//if there is an import after this just wanna lyk i added it my self and wrote this too

function Home() {
    const [tab, setTab] = useState("router-practice")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [tab]
    )
    return (
        <div className="sidebar-layout">
            {/* 📱 Mobile Dropdown Menu (Visible on Phones & Tablets) */}
            <div className="mobile-nav-header">
                <div className="mobile-nav-title">⚡ React Lab</div>
                <select
                    className="mobile-nav-select"
                    value={tab}
                    onChange={(e) => setTab(e.target.value)}
                >
                    <optgroup label="🌱 1. State & Inputs">
                        <option value="state-lesson">🌱 State Lesson</option>
                        <option value="state-challenge">⚡ State Challenge</option>
                        <option value="input-lesson">⌨️ Input Lesson</option>
                        <option value="input-challenge">💬 Input Challenge</option>
                    </optgroup>

                    <optgroup label="📋 2. Lists & Arrays">
                        <option value="array-list">📋 Array List</option>
                        <option value="dynamic-list">🔄 Dynamic List</option>
                        <option value="mapping-rev">🗺️ Mapping Revision</option>
                        <option value="revision">📝 Revision</option>
                        <option value="practice">🎯 Practice</option>
                    </optgroup>

                    <optgroup label="⚔️ 3. Boss Quests">
                        <option value="boss-1">⚔️ Boss 1 (RPG Quest)</option>
                        <option value="boss-2-tech">💻 Boss 2 (Tech Store)</option>
                        <option value="boss-2-array">👑 Boss 2 (Array Master)</option>
                        <option value="boss-3-cargo">📦 Boss 3 (Cyber Cargo)</option>
                    </optgroup>

                    <optgroup label="⚡ 4. APIs & Timers">
                        <option value="effect-lesson">⚡ Effect Lesson (PokeAPI)</option>
                        <option value="rnm">🧪 Rick & Morty Scanner</option>
                        <option value="anime">⛩️ Anime Intel</option>
                        <option value="food">🍳 Recipe Vault</option>
                        <option value="stopwatch">⏱️ Stopwatch Lab</option>
                        <option value="timeout">💣 Timeout Lab</option>
                        <option value="router">🧭 Router Lab</option>
                        <option value="router-challenge">🌌 Starfleet Academy</option>
                        <option value="router-practice">🎧 Audio Deck</option>
                    </optgroup>
                </select>
            </div>

            {/* 🧭 Desktop Left Sidebar Navigation (Hidden on Mobile) */}
            <nav className="sidebar-nav desktop-sidebar">
                <h2 className="sidebar-title">⚡ React Lab</h2>

                {/* 1. Basics & State */}
                <span className="sidebar-section-title">STATE & INPUTS</span>
                <button className={`sidebar-btn ${tab === 'state-lesson' ? 'active-nav-btn' : ''}`} onClick={() => setTab("state-lesson")}>🌱 State Lesson</button>
                <button className={`sidebar-btn ${tab === 'state-challenge' ? 'active-nav-btn' : ''}`} onClick={() => setTab("state-challenge")}>⚡ State Challenge</button>
                <button className={`sidebar-btn ${tab === 'input-lesson' ? 'active-nav-btn' : ''}`} onClick={() => setTab("input-lesson")}>⌨️ Input Lesson</button>
                <button className={`sidebar-btn ${tab === 'input-challenge' ? 'active-nav-btn' : ''}`} onClick={() => setTab("input-challenge")}>💬 Input Challenge</button>

                {/* 2. Lists & Arrays */}
                <span className="sidebar-section-title">LISTS & ARRAYS</span>
                <button className={`sidebar-btn ${tab === 'array-list' ? 'active-nav-btn' : ''}`} onClick={() => setTab("array-list")}>📋 Array List</button>
                <button className={`sidebar-btn ${tab === 'dynamic-list' ? 'active-nav-btn' : ''}`} onClick={() => setTab("dynamic-list")}>🔄 Dynamic List</button>
                <button className={`sidebar-btn ${tab === 'mapping-rev' ? 'active-nav-btn' : ''}`} onClick={() => setTab("mapping-rev")}>🗺️ Mapping Revision</button>
                <button className={`sidebar-btn ${tab === 'revision' ? 'active-nav-btn' : ''}`} onClick={() => setTab("revision")}>📝 Revision</button>
                <button className={`sidebar-btn ${tab === 'practice' ? 'active-nav-btn' : ''}`} onClick={() => setTab("practice")}>🎯 Practice</button>

                {/* 3. The 3 Boss Challenges */}
                <span className="sidebar-section-title">BOSS QUESTS</span>
                <button className={`sidebar-btn ${tab === 'boss-1' ? 'active-nav-btn' : ''}`} onClick={() => setTab("boss-1")}>⚔️ Boss 1 (RPG Quest)</button>
                <button className={`sidebar-btn ${tab === 'boss-2-tech' ? 'active-nav-btn' : ''}`} onClick={() => setTab("boss-2-tech")}>💻 Boss 2 (Tech Store)</button>
                <button className={`sidebar-btn ${tab === 'boss-2-array' ? 'active-nav-btn' : ''}`} onClick={() => setTab("boss-2-array")}>👑 Boss 2 (Array Master)</button>
                <button className={`sidebar-btn ${tab === 'boss-3-cargo' ? 'active-nav-btn' : ''}`} onClick={() => setTab("boss-3-cargo")}>📦 Boss 3 (Cyber Cargo)</button>

                {/* 4. API & useEffect Series */}
                <span className="sidebar-section-title">APIs & TIMERS</span>
                <button className={`sidebar-btn ${tab === 'effect-lesson' ? 'active-nav-btn' : ''}`} onClick={() => setTab("effect-lesson")}>⚡ Effect Lesson (PokeAPI)</button>
                <button className={`sidebar-btn ${tab === 'rnm' ? 'active-nav-btn' : ''}`} onClick={() => setTab("rnm")}>🧪 Rick & Morty Scanner</button>
                <button className={`sidebar-btn ${tab === 'anime' ? 'active-nav-btn' : ''}`} onClick={() => setTab("anime")}>⛩️ Anime Intel</button>
                <button className={`sidebar-btn ${tab === 'food' ? 'active-nav-btn' : ''}`} onClick={() => setTab("food")}>🍳 Recipe Vault</button>
                <button className={`sidebar-btn ${tab === 'stopwatch' ? 'active-nav-btn' : ''}`} onClick={() => setTab("stopwatch")}>⏱️ Stopwatch Lab</button>
                <button className={`sidebar-btn ${tab === 'timeout' ? 'active-nav-btn' : ''}`} onClick={() => setTab("timeout")}>💣 Timeout Lab</button>

                {/* 5. Phase 6: Multi-Page Routing */}
                <span className="sidebar-section-title">MULTI-PAGE ROUTING</span>
                <button className={`sidebar-btn ${tab === 'router' ? 'active-nav-btn' : ''}`} onClick={() => setTab("router")}>🧭 Router Lab</button>
                <button className={`sidebar-btn ${tab === 'router-challenge' ? 'active-nav-btn' : ''}`} onClick={() => setTab("router-challenge")}>🌌 Starfleet Academy</button>
                <button className={`sidebar-btn ${tab === 'router-practice' ? 'active-nav-btn' : ''}`} onClick={() => setTab("router-practice")}>🎧 Audio Deck</button>
            </nav>

            {/* 🖥️ Main Content Area on the Right */}
            <main className="sidebar-main">
                {isLoading ? (<div className="home-loader-container">
                    <div className="home-spinner"></div>
                    <p className="home-loader-text">Loading Lab Module...</p>
                </div>) : (
                    <div>
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
                        {tab === "stopwatch" && <StopwatchChallenge />}
                        {tab === "timeout" && <TimeoutChallenge />}
                        {tab === "router" && <RouterLesson />}
                        {tab === "router-challenge" && <RouterChallenge />}
                        {tab === "router-practice" && <RouterPractice />}
                    </div>
                )}
            </main>
        </div>
    )
}

export default Home