import { useMemo, useState } from "react"
import { Parameters } from "./components/Parameters"
import Workout from "./components/Workout"
import { Excercise } from "./types"
import { useEffect } from "react"
import uniq from "lodash/uniq"
import Header from "./components/Header"

function App() {
  const [exercises, setExercises] = useState<Array<Excercise>>([])
  const [chosenMuscleTypes, setChosenMuscleTypes] = useState<
    Record<string, boolean>
  >({})
  const [chosenExercise, setChosenExercise] = useState("")
  const [clicked, setClicked] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch("/.netlify/functions/get-exercises")
      const { exercises } = await response.json()

      setExercises(exercises)
    } catch (err) {
      console.log(err)
    }
  }

  function handleChange(checked: boolean, muscleType: string) {
    setChosenMuscleTypes((previousValue) => ({
      ...previousValue,
      [muscleType]: checked,
    }))
    setChosenExercise("")
  }

  useEffect(() => {
    fetchData()
  }, [])

  const muscleTypes = useMemo(
    () => uniq(exercises.map((exercise) => exercise.muscle)),
    [exercises]
  )

  const toggleInstructions = (name: string) => {
    setChosenExercise(name)
    if (clicked && chosenExercise === name) {
      setClicked(false)
    } else {
      setClicked(true)
    }
  }

  const chosenAll = useMemo(
    () =>
      muscleTypes.length ===
      Object.values(chosenMuscleTypes).filter(Boolean).length,
    [muscleTypes, chosenMuscleTypes]
  )

  return (
    <div className="App">
      <Header />
      <h1>Meet your new personal trainer 🏋🏼‍♀️</h1>
      <div className="container">
        <Parameters
          toggleAll={() => {
            if (chosenAll) {
              setChosenMuscleTypes({})
            } else {
              setChosenMuscleTypes(
                muscleTypes.reduce(
                  (acc, muscleType) => ({ ...acc, [muscleType]: true }),
                  {}
                )
              )
              setChosenExercise("")
            }
          }}
          handleChange={handleChange}
          muscleTypes={muscleTypes}
          chosenMuscleTypes={chosenMuscleTypes}
          isChosenAll={chosenAll}
        />
      </div>
      <div className="container">
        <Workout
          exercises={exercises.filter(
            (exercise) => chosenMuscleTypes[exercise.muscle]
          )}
          toggleInstructions={toggleInstructions}
          chosenExercise={chosenExercise}
          clicked={clicked}
        />
      </div>
    </div>
  )
}

export default App
