import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function computeSum() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    if (isNaN(numA) || isNaN(numB)) {
      setResult("A and B should be numbers!");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>
      <input value={result} disabled style={{ color: isError ? "red" : "white" }} />
      
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;