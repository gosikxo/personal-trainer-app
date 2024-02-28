import React from "react"
import { Excercise } from "../types"

const Workout = ({
  exercises,
  toggleInstructions,
  chosenExercise,
  clicked,
}: {
  exercises: Array<Excercise>
  toggleInstructions: (name: string) => void
  chosenExercise: string
  clicked: boolean
}) => {
  return exercises.length > 0 ? (
    <div className="workout">
      <h2 className="workout__title">Workout</h2>
      <ol className="workout__list">
        {exercises.map((exercise: Excercise) => (
          <li
            onClick={() => toggleInstructions(exercise.name)}
            className="workout__item"
          >
            <span className="workout__item-name">{exercise.name}</span> (
            <span className="workout__item-muscle">{exercise.muscle}</span>)
            <p
              className={
                chosenExercise === exercise.name && clicked
                  ? "workout__item-instructions--visible"
                  : "workout__item-instructions"
              }
            >
              {exercise.instructions}
            </p>
          </li>
        ))}
      </ol>
    </div>
  ) : null
}

export default Workout
