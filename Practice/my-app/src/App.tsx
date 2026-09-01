import * as React from "react";
import {useEffect} from "react";
const App = () => {
    const [count, setCount] = React.useState<number>(0)

    useEffect(() => {
      console.log("Count Increases...")
    }, [count])
  return (
      <>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </>
  );
}

export default App;