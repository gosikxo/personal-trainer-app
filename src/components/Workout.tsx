import React from 'react'
import { Excercise } from '../types'

const Workout = ({ exercises }: { exercises: Array<Excercise> }) => {
  return (
    <div className='workout'>
      <h2>Workout</h2>
      {exercises.map((exercise: Excercise) => (
        <div>
          {exercise.name}
        </div>
      ))}
    </div>
  )
}

export default Workout