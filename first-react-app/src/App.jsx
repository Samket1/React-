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

function App() {
  const username = "gibbrishian"
  const score = 100
  return (
    <>
      <h1 className='header'>Hello, {username} !</h1>
      <p className='subtitle'> Score: {score} |  Next Level: {score + 50}</p>
      <div className="cards-grid">
        <UserCard name="new user" score={300} />
        <UserCard name="user2" score={450} />
        <UserCard name="user3" score={0} />
      </div>
    </>
  )
}
export default App


