import React from 'react'
import { Excercise } from '../types'

const Workout = ({ exercises, toggleInstructions, clicked }: { exercises: Array<Excercise>, toggleInstructions: () => void, clicked: boolean }) => {
  return (
    <div className='workout'>
      <h2>Workout</h2>
      <ol>
        {exercises.map((exercise: Excercise) => (
          <li onClick={toggleInstructions}>
            {exercise.name} ({exercise.muscle})
            <p className={clicked? "visibleInstructions":"instructions"}>{exercise.instructions}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Workout