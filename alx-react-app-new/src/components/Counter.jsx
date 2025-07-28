import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{margin: '10px'}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{margin: '10px'}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{margin: '10px'}}>Reset</button>
    </div>
  );
}

export default Counter;
