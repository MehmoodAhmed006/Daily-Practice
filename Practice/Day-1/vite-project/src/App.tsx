import {useMemo, useState} from 'react'
function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const handleAdd = () => {
    setCount(prevState => prevState + 1);
  }
  const handleReset = () => {
    setCount(0);
  }

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleReset}>Reset</button>


    </>
  )
}

export default App
