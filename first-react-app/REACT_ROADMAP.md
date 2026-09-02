# 🚀 Full React Mastery Roadmap

A complete breakdown of our React curriculum, tracking everything accomplished and what lies ahead.

---

## 🟢 Phase 1: React Foundations & JSX *(Completed ✅)*
* [x] **Lesson 1: Components & JSX Structure**
  * Creating functional components (`function App()`, `export default`)
  * JSX vs HTML Rules (Single root `<> </>`, `className` vs `class`, self-closing tags)
  * CSS stylesheet imports & layouts
* [x] **Lesson 2: Dynamic Data in JSX `{ }`**
  * Embedding JavaScript variables and expressions inside `{}`
  * Arithmetic operations and string interpolation in templates

---

## 🟢 Phase 2: Reusable Components & Props *(Completed ✅)*
* [x] **Lesson 3: Custom Components & Props**
  * Creating reusable custom components (`UserCard`, `GameCard`, `MovieCard`)
  * Passing data from parent to child via `props`
  * Responsive CSS Grid layouts & glassmorphism card UI

---

## 🟢 Phase 3: Working with Lists & Arrays *(Completed ✅)*
* [x] **Lesson 4: Array Mapping & Key Props**
  * Modern JavaScript Arrow Functions (`() => ...`, implicit returns)
  * Transforming arrays into UI lists with `.map()`
  * Why React strictly requires unique `key={item.id}` props

---

## 🟡 Phase 4: State & Interactivity — `useState` *(Current Unit 🧠⚡)*
* [x] **Part 1: Numbers in State**
  * `useState(0)` hook mechanics & destructuring `[count, setCount]`
  * Click handlers with `onClick`, preventing infinite render loops
* [x] **Part 2: Booleans in State & Conditional Rendering**
  * `useState(false)` boolean flags & flipping state (`!isOpen`)
  * Short-circuit rendering with `&&`
  * Ternary operators (`? :`) for dynamic button labels and text
  * Full-page and card-level Dark/Light Mode theme switchers
* [x] **Part 3: Strings in State & Live User Inputs**
  * `useState("")` string state
  * Controlled inputs: `value={text}` and `onChange={(e) => setText(e.target.value)}`
  * Understanding the Event Object `e`, `e.target`, and `e.target.value`
  * Live text preview cards & real-time character counters (`text.length`)
  * Dynamic conditional styling: `style={{ color: (length >= 100 ? "red" : "inherit") }}`
  * Multi-input state resets (Clear buttons)
* [x] **Part 4: Arrays in State (Dynamic Lists)** ✅
  * `useState([])` for storing lists of data
  * Adding items immutably using the Spread Operator: `[...items, newItem]`
  * Rendering state lists dynamically with `.map()`
  * Deleting/removing items cleanly with `.filter()`
* [ ] **Part 5: Grand Finale Boss Challenge** 📍 *(NEXT UP!)*
  * Building a complete interactive Mini-App combining all 4 state types!

---

## 🔮 Phase 5: Side Effects & Real-World Data *(Upcoming)*
* [ ] **Lesson 6: The `useEffect` Hook & APIs**
  * Component lifecycle (mounting, updating, unmounting)
  * Fetching real-world live data from APIs (Fetch / Axios)
  * Dependency arrays `[]` vs `[state]`
  * Loading spinners & error handling

---

## 🔮 Phase 6: Multi-Page Routing *(Upcoming)*
* [ ] **Lesson 7: Single Page Applications (`react-router`)**
  * Multi-view apps without page reloads
  * Setting up `<Routes>`, `<Route>`, and `<Link>`
  * Dynamic URL parameters (`useParams`) and programmatic navigation (`useNavigate`)

---

## 💡 Quick Reference Cheat Sheet

```jsx
// 1. Numbers
const [count, setCount] = useState(0)
<button onClick={() => setCount(count + 1)}>+1</button>

// 2. Booleans & Toggles
const [isOpen, setIsOpen] = useState(false)
<button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>
{isOpen && <div>Content Visible</div>}

// 3. Strings & Inputs
const [text, setText] = useState("")
<input value={text} onChange={(e) => setText(e.target.value)} />
<p style={{ color: (text.length >= 100 ? "red" : "inherit") }}>{text}</p>

// 4. Arrays (Upcoming)
const [items, setItems] = useState(["Item 1"])
const addItem = (newItem) => setItems([...items, newItem])
const deleteItem = (id) => setItems(items.filter((item) => item.id !== id))
```
