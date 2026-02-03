import { useState } from "react";
import Children from "./Children";

export default function Parent() {

    console.log("Parent rendered!!");

    const [count, setCount] = useState<number>(0);
    
    const handleIncreaseCount = () => setCount(prev => prev + 1);

    return(
        <div>
          <span>{count}</span>

          <button onClick={handleIncreaseCount}>
            UP
          </button>

          <Children/>
        </div>
    )
}