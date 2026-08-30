import './App.css'
import { useState } from 'react'

function InputChallenge() {
  const [author, setAuthor] = useState("")
  const [post, setPost] = useState("")
  const [like, setLike] = useState(false)

  return (
    <div className="container">
      <h1 className="header">Social Post Composer Challenge 🐦✨</h1>
      <input style={{ textTransform: "capitalize" }} className="input-field" type="text" placeholder="Author's Name  (e.g. @johndoe)..."
        value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input className="input-field" type="text" placeholder="💭What's on your mind?"
        value={post} onChange={(e) => setPost(e.target.value)} />
      <div className='card'>
        <h2 style={{ textTransform: 'capitalize' }}>{author ? author : "Anonymous User"}</h2>
        <p style={{ color: (post.length >= 100 && "red") }}>{post ? post : "No Post Yet"}</p>
        <subtitle style={{ color: '#777777ff' }}>
          Characters: {post.length < 100 ? `${post.length}/100` : 'Max Character'}
        </subtitle>
        <button className={like ? "btn-primary" : "btn"} onClick={() => setLike(!like)}>{like ? "❤️" : "🤍"}</button>
        <button onClick={() => {
          setAuthor("")
          setPost("")
          setLike(false)
        }}>CLEAR</button>
      </div>
    </div >
  )
}

export default InputChallenge
