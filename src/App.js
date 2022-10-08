import React, { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
    // counter = counter + 1
  }

  function decrementCounter() {
    setCounter(counter - 1)

  }

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button disabled={counter == 0} onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default App;


// 