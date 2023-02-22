import React from 'react'
import { Exercise } from './Exercise'

const Workout = (exercises: []) => {
  return (
    <div className='workout'>
      <h2>Workout</h2>
      <Exercise exercises={exercises}/>
    </div>
  )
}

export default Workout