import { ChangeEvent, useMemo, useState } from "react";
import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";
import { Excercise } from "./types";
import { useEffect } from "react";
import uniq from "lodash/uniq"

function App() {
  const [exercises, setExercises] = useState<Array<Excercise>>([])
  const [chosenMuscleTypes, setChosenMuscleTypes] = useState<Record<string, boolean>>({})
  const [chosenExercise, setChosenExercise] = useState('')


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/excercises')
      const json = await response.json()
      setExercises(json)
    } catch (err) {
      console.log(err)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setChosenMuscleTypes(previousValue => ({ ...previousValue, [event.target.id]: event.target.checked }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const muscleTypes = useMemo(() => uniq(exercises.map(exercise => exercise.muscle)), [exercises])

  const toggleInstructions = (name: string) => {
    console.log(chosenExercise)
    setChosenExercise(name)
  }

  return (
    <div className="App">
      <h1>
        Meet your new personal trainer.
      </h1>
      <div className="container">
        <Parameters handleChange={handleChange} muscleTypes={muscleTypes} chosenMuscleTypes={chosenMuscleTypes} />
        <Workout exercises={exercises.filter(exercise => chosenMuscleTypes[exercise.muscle])} toggleInstructions={toggleInstructions} chosenExercise={chosenExercise}/>
      </div>
    </div>
  );
}

export default App;
