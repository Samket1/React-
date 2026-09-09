import { useState, useEffect } from 'react'
import './App.css'

function StopwatchChallenge() {
    const [stop, setStop] = useState(true)
    const [sec, setSec] = useState(0)

    useEffect(() => {
        if (stop) return
        else {
            const time = setInterval(() => { setSec((prev) => prev + 1) }, 1000)
            return () => clearInterval(time)

        }
    }, [stop])
    return (
        <div className="card">
            <h1 className="header">⏱️ Cyber Stopwatch Challenge</h1>
            <p className="subtitle">Mastering setInterval & clearInterval Cleanups</p>
            <h2>Seconds: {sec}</h2>
            <button onClick={() => setStop(false)}>Start</button>
            <button onClick={() => setStop(true)}>Stop</button>
            <button onClick={() => {
                setStop(true)
                setSec(0)
            }}>Reset</button>


        </div >
    )
}

export default StopwatchChallenge
