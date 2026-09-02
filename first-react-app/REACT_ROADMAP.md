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
* [x] **Part 5: Grand Finale Boss Challenge** ✅
  * Built full Cyberpunk Bounty HQ Mini-App combining all 4 state types, custom child components with props, mapping, filtering, and dynamic UI themes!

---

## 🧭 Lesson 6: Lifecycle, `useEffect`, & Fetching Real-World APIs 📍 *(NEXT UP!)*

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

## 🏗️ Phase 7: React Grand Finale
* [ ] **Lesson 8: The React Capstone Project**
  * Building a complete, multi-page web application integrating everything learned so far!

---

## 🚀 Phase 8: Full-Stack Mastery (MERN Stack)
* [ ] **Lesson 9: Intro to the Back-End & Node.js / Express**
  * What is a server? Setting up your own Express.js API.
  * Building your first API endpoints (GET, POST, PUT, DELETE).
* [ ] **Lesson 10: MongoDB & Mongoose (Databases)**
  * Designing a real NoSQL Database to permanently save your data.
  * Storing and querying data collections.
* [ ] **Lesson 11: Full CRUD Operations in MERN**
  * **C**reate: Sending new data from React to MongoDB.
  * **R**ead: Fetching data from MongoDB to display in React.
  * **U**pdate: Modifying existing data (like marking a bounty complete!).
  * **D**elete: Removing data from the database.
* [ ] **Lesson 12: Authentication & The Final Full-Stack App**
  * Logging in, saving user sessions, and deploying your MERN stack app to the real internet!

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
