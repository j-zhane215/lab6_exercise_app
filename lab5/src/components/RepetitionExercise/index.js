import { useState } from "react"

export default function RepetitionExercise(props) {
const {name}= props
const [count, setCount] = useState(0)

function increaseCount() {
    setCount((number) => number + 1)
}

function resetCount() {
    setCount(0)
}

return (
    <><div className="contents">
        <h1>{name}</h1>
        <h2>{count.toString().padStart(2, "0")}</h2>
    </div>
    <div className="choices">
        <button className ="rep-button" onClick={increaseCount}>Add reps +</button><br></br>
        <button className="reset-rep" onClick={resetCount}>Reset</button><br></br>
        <button className="back-button" onClick={
            () => window.location.reload()}>Back to Main Menu</button>
        </div>
        </>
)
}
