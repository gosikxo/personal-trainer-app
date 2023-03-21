import React from 'react'
import { Excercise } from '../types'

const Workout = ({ exercises, toggleInstructions, chosenExercise }: { exercises: Array<Excercise>, toggleInstructions: (name: string) => void, chosenExercise: string }) => {
  return (
    <div className='workout'>
      <h2>Workout</h2>
      <ol>
        {exercises.map((exercise: Excercise) => (
          <li onClick={() => toggleInstructions(exercise.name)} className='exercise'>
            {exercise.name} ({exercise.muscle})
            <p className={chosenExercise ? "visibleInstructions":"instructions"}>{exercise.instructions}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Workout