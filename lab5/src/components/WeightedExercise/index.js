import { useState } from "react"

function DropdownMenu() {
  const [open, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!open)
  const weights = ['Dumbbell', 'Kettlebell', 'Barbell', 'Weight Plate', 'Sandbag']

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggle}>
        Select your weight from the menu
      </button>
      {open && (
        <ul className="dropdown-menu">
          {weights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div> 
  )
}

export default function WeightedExercise(props) {
const {name}= props
const [count, setCount] = useState(0)
const [countWeight, setCountWeight] = useState(1)


function increaseCount() {
    setCount((number) => number + 1)
}

function resetCount() {
    setCount(0)
}

function increaseWeight() {
    setCountWeight((number) => number + 5)
}

function resetWeight() {
    setCountWeight(0)
}

return (
    <>
    
    <div className="contents">
        <h1 className="weights">{name}</h1>
        <DropdownMenu/>

        <h2 className="counter1">{count.toString().padStart(2, "0")}</h2>
    </div>
    <div className="choices2">
        <button className="increase-count" onClick={increaseCount}>Add reps +</button>
        <button className="reset-button" onClick={resetCount}>Reset</button>
        
        <h2>{countWeight.toString().padStart(2, "0")}</h2>
        <button className="increase-weight" onClick={increaseWeight}>Add weight (lbs) +</button>
        <button className="reset-button" onClick={resetWeight}>Reset weight</button><br></br>
        <button className="back-button" onClick={
            () => window.location.reload()}>Back to Main Menu</button>
        </div>
        </>
)

}