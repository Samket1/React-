import { useState, useEffect } from 'react'
import './App.css'
import { use } from 'react'

function TimeoutChallenge() {
    const [alert, setAlert] = useState("")
    const [defused, setDefused] = useState(false)
    const [sec, setSec] = useState(0)
    const [restart, setRestart] = useState(false)
    const [won, setWon] = useState(true)
    const [stop, setStop] = useState(false)
    const Main_Time = 2
    useEffect(() => {
        if (defused) return

        if (!stop) {
            const count = setInterval(() => {
                setSec((prev) => prev + 1)
            }, 1000)

            const alarm = setTimeout(() => {
                setAlert("🔴BOOM YOU LOSE")
                setWon(false)
                setStop(true)
            }, Main_Time * 1000)
            return () => {
                clearTimeout(alarm)
                clearInterval(count)
            }
        }

    }, [defused, restart, stop])
    return (
        <div className="card">
            <h1 className="header">💣 Bomb Defusal Lab (setTimeout)</h1>
            <p className="subtitle">Mastering setTimeout & clearTimeout Wire-Cutting</p>
            <h2>Timer: {sec}</h2>
            <h2> {alert}</h2>

            <button onClick={() => {
                if (sec < Main_Time) {
                    setDefused(true)
                    setAlert("🟢 Wire Cut! Timer Defused!")
                    setWon(true)
                }
                else { setWon(false) }
            }}>{won ? "✂️ Cut Wire" : "Doesnt matter if you cut it now✂️"}</button>
            <button onClick={() => {
                setDefused(false)
                setSec(0)
                setAlert("")
                setRestart(!restart)
                setWon(true)
                setStop(false)
            }}>Restart</button>
        </div>
    )
}

export default TimeoutChallenge
