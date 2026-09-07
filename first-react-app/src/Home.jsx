import { useState } from 'react'
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

function Home() {
    const [tab, setTab] = useState("food")

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#090d16' }}>
            {/* 🧭 Left Sidebar Navigation */}
            <nav style={{
                width: '260px',
                minWidth: '260px',
                height: '100vh',
                position: 'sticky',
                top: 0,
                overflowY: 'auto',
                padding: '24px 16px',
                boxSizing: 'border-box',
                background: '#0b0f19',
                borderRight: '1px solid #1e293b',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 100
            }}>
                <h2 style={{
                    fontSize: '1rem',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    margin: '0 0 16px 8px',
                    fontWeight: 700
                }}>
                    ⚡ React Lab
                </h2>

                {/* 1. Basics & State */}
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, margin: '10px 0 4px 8px' }}>STATE & INPUTS</span>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("state-lesson")}>🌱 State Lesson</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("state-challenge")}>⚡ State Challenge</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("input-lesson")}>⌨️ Input Lesson</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("input-challenge")}>💬 Input Challenge</button>

                {/* 2. Lists & Arrays */}
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, margin: '14px 0 4px 8px' }}>LISTS & ARRAYS</span>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("array-list")}>📋 Array List</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("dynamic-list")}>🔄 Dynamic List</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("mapping-rev")}>🗺️ Mapping Revision</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("revision")}>📝 Revision</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("practice")}>🎯 Practice</button>

                {/* 3. The 3 Boss Challenges */}
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, margin: '14px 0 4px 8px' }}>BOSS QUESTS</span>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("boss-1")}>⚔️ Boss 1 (RPG Quest)</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("boss-2-tech")}>💻 Boss 2 (Tech Store)</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("boss-2-array")}>👑 Boss 2 (Array Master)</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("boss-3-cargo")}>📦 Boss 3 (Cyber Cargo)</button>

                {/* 4. API & useEffect Series */}
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, margin: '14px 0 4px 8px' }}>APIs & USE_EFFECT</span>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("effect-lesson")}>⚡ Effect Lesson (PokeAPI)</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("rnm")}>🧪 Rick & Morty Scanner</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("anime")}>⛩️ Anime Intel</button>
                <button style={{ textAlign: 'left', padding: '10px 14px' }} onClick={() => setTab("food")}>🍳 Recipe Vault</button>
            </nav>

            {/* 🖥️ Main Content Area on the Right */}
            <main style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
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