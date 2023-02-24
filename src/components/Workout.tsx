import React from 'react'
import { Excercise } from '../types'

const Workout = ({ exercises }: { exercises: Array<Excercise> }) => {
  return (
    <div className='workout'>
      <h2>Workout</h2>
      <ol>
        {exercises.map((exercise: Excercise) => (
          <li>
            {exercise.name}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Workout