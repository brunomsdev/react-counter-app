import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decreese</button>
    </>
  ); 
}


export default Counter;