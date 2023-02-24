import { useState } from "react";
import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";
import { Excercise } from "./types";
import { useEffect } from "react";

function App() {
  const [exercises, setExcersises] = useState<Array<Excercise>>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/excercises')
      const json = await response.json()
      setExcersises(json)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = (exerciseClicked: string): void => {
    setExcersises(exercises.filter((exercise) => {
      return exercise.muscle === exerciseClicked
    }))
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
        <Parameters handleClick={handleClick}/>
        <Workout exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
