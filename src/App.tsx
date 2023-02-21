import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";

function App() {
  return (
    <div className="App">
      <h1>
        Meet your new personal trainer.
      </h1>
      <div className="container">
        <Parameters />
        <Workout />
      </div>
    </div>
  );
}

export default App;
