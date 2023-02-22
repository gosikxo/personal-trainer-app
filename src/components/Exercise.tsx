import React from 'react'

type Excercise = {
    name: string,
    muscle: string,
    equipment: string,
    intructions: string
  }
    

export const Exercise = (props: { exercises: [] }) => {
  return (
    <div>
        {props.exercises.map((exercise: Excercise) => (
        <div>{exercise.name}</div>
      ))}
    </div>
  )
}
