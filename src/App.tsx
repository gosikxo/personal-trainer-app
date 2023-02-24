import { useState } from "react";
import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";
import { Excercise } from "./types";

function App() {
  const [exercises, setExcersises] = useState<Array<Excercise>>([]);

  return (
    <div className="App">
      <h1>
        Meet your new personal trainer.
      </h1>
      <div className="container">
        <Parameters />
        <Workout exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
