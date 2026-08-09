// Write your React code below!
import './App.css'
function UserCard(props) {

}

function App() {
  const username = "Skate"
  const score = 100
  return (
    <>
      <h1 className='header'>Hello, {username} !</h1>
      <p className='subtitle'> Score: {score} |  Next Level: {score + 50}</p>
    </>
  )
}
export default App


