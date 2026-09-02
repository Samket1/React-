import './App.css'
import { useState } from 'react'
function ProductCard (props){
  return(
    <div></div>
  )
}
function TechStoreChallenge() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [isVipDiscount, setIsVipDiscount] = useState(false)
  const [newProductName, setNewProductName] = useState("")
  const [products, setProducts] = useState(["🎧 Neural Headset", "⚡ Quantum Keyboard", "🕶️ Holo-Visor"])



  return (
    <div className="container">
      <h1 className="header">CyberTech Store & Cart 🛒⚡</h1>
    </div>
  )
}

export default TechStoreChallenge
