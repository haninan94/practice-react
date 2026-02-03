import { useState } from "react";
import Children2 from "./Children2";

export default function Parent2() {
  
    console.log("Parent2 rendered!!");

    const [count, setCount] = useState<number>(0);
    
    const handleIncreaseCount = () => setCount(prev => prev + 1);
  
  return(
    <div>
      <Children2 count={count}/>
      <button onClick={handleIncreaseCount}>
        Up
      </button>
    </div>
  )
}