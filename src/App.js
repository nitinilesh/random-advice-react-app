import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h3 className="advice">{advice}</h3>

      <button onClick={getAdvice}>Get advice</button>
      <Message value={count} />
    </div>
  );
}
function Message(props) {
  return (
    <>
      <p className="count">{`You have read ${props.value} pieces of advice`}</p>
    </>
  );
}
