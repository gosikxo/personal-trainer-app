import { ChangeEvent, useState } from "react";
import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";
import { Excercise } from "./types";
import { useEffect } from "react";

function App() {
  const [exercises, setExercises] = useState<Array<Excercise>>([])
  const [exercise, setExercise] = useState("")

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
    if (event.target.checked) {
      setExercise(event.target.id)
      setExercises(exercises.filter((exercise) => {
        return exercise.muscle === event.target.id
      }))
    } else {
      setExercises(exercises)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>
        Meet your new personal trainer.
      </h1>
      <div className="container">
        <Parameters handleChange={handleChange} />
        <Workout exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
