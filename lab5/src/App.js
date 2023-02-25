import './App.css'
import React, {useState} from 'react'
import RepetitionExercise from './components/RepetitionExercise'
import DurationExercise from './components/DurationExercise'
import WeightedExercise from './components/WeightedExercise'

function App() {
  
  const [selectExercise, setSelectExercise] = useState(null);
  const exercises = [
    { name: "Push-Ups", type: 'repetition' },
    { name: "Running", type: 'duration' },
    { name: "Weights", type: 'weighted'}
  ]

  const handleSelectExercise = (exercise) => {
    setSelectExercise(exercise)
  }

function renderExApp() {
if (selectExercise) {
    if (selectExercise.type === 'duration') {
      return <DurationExercise name = {selectExercise.name}/>
    } else if (selectExercise.type === 'repetition'){
     return <RepetitionExercise name = {selectExercise.name}/>
    } else if (selectExercise.type === 'weighted') {
      return <WeightedExercise name = {selectExercise.name}/>
    }
  } else {
    return( 
      <>
      <h1 className='welcome'>Welcome</h1>
      <h2>Please choose an exercise</h2>
       <ul className='main-buttons'>
        {exercises.map((exercise) => (
          <li className='exercise-buttons'key = {exercise.name}>
            <button className={exercise.name} onClick={() => handleSelectExercise(exercise)}>{exercise.name}</button>
          </li>
        ))}
       </ul>
    
      </>
    )
  }
}
return (
  <div className='mainMenu'>
    <div className='contents'>
{renderExApp()}
    </div>
  </div>
)
}

  
export default App
