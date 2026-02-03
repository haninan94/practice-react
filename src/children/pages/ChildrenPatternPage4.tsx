import { useState } from "react";
import Children3 from "../components/Children3";
import Parent from "../components/Parent";
import Parent3 from "../components/Parent3";

export default function ChildrenPatternPage4 () {

  const [count, setCount] = useState<number>(0)

  return(
  
    <div>
        <h1>This is ChildernPatternPage4</h1>

        <Parent/>

        <hr />

        <Parent3>
          <Children3/>
        </Parent3>

        <hr/>    

        <div>{count}</div>
        <button onClick={()=>setCount(count + 1)}>
          Up
        </button>
    </div>
  
  )

}