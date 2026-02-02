import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h3 className="advice">{advice}</h3>

      <button onClick={getAdvice}>Get advice</button>
      <div className="count">Advice No: {count}</div>
    </div>
  );
}
export default App;
