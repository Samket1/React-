import './App.css'
function CharcterCard(props) {
    return (
        <div className='card'>
            <h3>Name: {props.name}</h3>
            <p>Power: {props.power}</p>
            <p>Level: {props.level}</p>
        </div>
    )
}
function Practice() {
    const characters = [
        { id: 1, name: "Goku", power: "Kamehameha", level: 9000 },
        { id: 2, name: "Naruto", power: "Rasengan", level: 8500 },
        { id: 3, name: "Lufy", power: "Gear 5", level: 8800 },


    ]
    return (
        <div className="container">
            <h1 className="header">Practice Mode 🚀</h1>
            <div className='cards-grid'>
                {characters.map((c) =>
                    <CharcterCard key={c.id} name={c.name} power={c.power} level={c.level} />
                )}
            </div>
        </div>
    )
}

export default Practice