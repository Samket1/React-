// Write your React code below!
import './App.css'
function UserCard(props) {
  return (
    <div className='card'>
      <h2>User: {props.name}</h2>
      <p>score: {props.score}</p>
    </div>
  )
}
function GameCard(props) {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>Genre: {props.genre}</p>
      <p>Rating: {props.rating}/10</p>
    </div>
  )
}
function App() {
  const username = "gibbrishian"
  const score = 100
  const userList = [
    { id: 1, name: "Mr1", score: 100 },
    { id: 2, name: "Mr2", score: 300 },
    { id: 3, name: "Mr3", score: 350 },
    { id: 4, name: "Mr4", score: 500 },
    { id: 5, name: "Mr5", score: 450 },
    { id: 6, name: "Mr6", score: 750 },
  ]
  const gamelist = [
    { id: 1, title: "Mc", genre: "Sandbox", rating: 9.5 },
    { id: 2, title: "GTA V", genre: "Action", rating: 9.0 }
  ]
  return (
    <>
      <h1 className='header'>Hello, {username} !</h1>
      <p className='subtitle'> Score: {score} |  Next Level: {score + 50}</p>
      <div className="cards-grid">
        {userList.map((user) => (
          <UserCard key={user.id} name={user.name} score={user.score} />
        ))}
        {gamelist.map((games) => (
          <GameCard key={games.id} title={games.title} genre={games.genre} rating={games.rating} />
        ))
        }
      </div>
    </>
  )
}
export default App


