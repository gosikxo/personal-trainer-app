import { useEffect, useState } from "react";
import { Parameters } from "./components/Parameters";
import Workout from "./components/Workout";

async function fetchExcersises() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fc93ca8128msh1bb27fbaebf2010p199242jsne15137eb2e7d",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
    }
  };

  let results: string[] = [];
  let offset = 0;

  while (true) {
    try {
      const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps&offset=${offset}`;
      const res = await fetch(url, options);
      if (res.status !== 200) {
        console.log(res);
      }
      const jsonedRes = await res.json();
      if (jsonedRes.length === 0) {
        return results;
      } else {
        results = results.concat(jsonedRes);
      }
    } catch (error) {
      console.log(error);
      return [];
    }
    offset += 10;
  }
}

function App() {
  const [exercises, setExcersises] = useState<string[]>();

  useEffect(() => {
    fetchExcersises().then((res) => setExcersises(res));
  }, []);

  return (
    <div className="App">
      <h1>
        Meet your new personal trainer.
      </h1>
      <div className="container">
        <Parameters />
        <Workout exercises={exercises}/>
      </div>
    </div>
  );
}

export default App;
