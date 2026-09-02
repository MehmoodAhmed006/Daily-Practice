import * as React from "react";
import {useEffect} from "react";

interface NamesProps  {
    name: string;
    role: string;
}

function ChangeNames ({name, role}: NamesProps) {
    return (
     <div>
         <h2>{name}</h2>
         <p>{role}</p>
     </div>
    )
}

const App = () => {
    const [count, setCount] = React.useState<number>(0)
    const [name, setName] = React.useState<string>('')
    const [role, setRole] = React.useState<string>('')

    useEffect(() => {
    const interval = setInterval(() => {
        console.log("interval")
    }, 1000)
        return () => {
        clearInterval(interval)
        }

    }, [count])

    const handleChange = () => {
        setName(name === "Mehmood" ? "Yahya" : "Mehmood");
        setRole(role === "Developer" ? "Designer" : "Developer");
    };


  return (
      <>
        <h2>count is: {count}'s</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}> Reset </button>

        <ChangeNames name={name} role={role} />
          <button onClick={handleChange}>Change Name</button>
      </>
  );
}

export default App;