import './App.css'
import { useState } from 'react'
function ProductCard(props) {
  return (
    <div className='cyber-card'>
      <p>{props.title}</p>
      <button className='btn btn-complete' onClick={props.buying}>Buy Item</button>
      <button className='btn btn-abandon' onClick={props.removing}>Remove</button>

    </div >
  )
}
function TechStoreChallenge() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [isVipDiscount, setIsVipDiscount] = useState(false)
  const [newProductName, setNewProductName] = useState("")
  const [products, setProducts] = useState(["🎧 Neural Headset", "⚡ Quantum Keyboard", "🕶️ Holo-Visor"])



  return (
    <div className={`cyber-container ${isVipDiscount ? 'cyber-stealth' : 'cyber-combat'}`}>
      <h1 className="header">CyberTech Store & Cart 🛒⚡</h1>
      <div className='hud-row'>
        <p className='hud-badge'>🛒 Total Spent: ${totalPrice}</p>
        <p className='hud-badge'>⚙️ Available Gear: {products.length}</p>
        <button className='btn' onClick={() => setIsVipDiscount(!isVipDiscount)}>{isVipDiscount ? "👑 VIP Mode ON" : "💳 Regular Mode"} </button>
      </div>
      <input type="text" placeholder='⚙️ Add Tech Gear' value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
      <button className='btn' onClick={() => {
        if (newProductName !== "") {
          setProducts([...products, newProductName])
          setNewProductName("")
        }
      }}>⚙️ADD⚙️</button>
      {
        products.map((plist, index) =>
          <ProductCard key={index} title={plist}
            removing={() => setProducts(products.filter((_, i) => (i !== index)))}
            buying={() => setTotalPrice(isVipDiscount ? totalPrice + 80 : totalPrice + 100)}
          />)
      }
      <h1 className='ifZero'>{products.length === 0 && "📦 Out Of Stock"}</h1>
    </div >

  )
}

export default TechStoreChallenge
