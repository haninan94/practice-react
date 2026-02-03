import { useState, type ReactNode } from "react";

interface ParentProps {
  children: React.ReactNode;
}

export default function Parent3({ children }: ParentProps) {
  
  console.log("Parent3 rendered!!");

  const [count, setCount] = useState<number>(0);
  
  const handleIncreaseCount = () => setCount(prev => prev + 1);
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncreaseCount}>Up</button>

        <div>
          {children}
        </div>  

    </div>
  )
}