import './App.css'
function CoffeeCard(props) {
  return (
    <div className='card'>
      <h2>{props.item}</h2>
      <p>Price: {props.price} </p>
    </div>
  )
}
function ComponentMappingRevision() {
  const Coffees = [
    { it: "☕ Espresso", p: "$3.50" },
    { it: "🥛 Latte", p: "$4.50" },
    { it: "🧊 Mocha", p: "$5.00" }
  ]
  return (
    <div className="container">
      <h1 className="header">Coffee Shop Menu ☕</h1>
      {Coffees.map((Cof, index) => (
        <CoffeeCard key={index} item={Cof.it} price={Cof.p} />
      ))
      }
    </div>)
}
export default ComponentMappingRevision