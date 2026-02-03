import Children3 from "../components/Children3";
import Parent3 from "../components/Parent3";

export default function ChildrenPatternPage3() {

  console.log("Page rendered!!");

  return(
    <div>
      <Parent3>
        <Children3/>
      </Parent3>
    </div>
  )
}