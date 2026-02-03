interface ChildrenProps {
  count: number;
}

export default function Children2({ count } : ChildrenProps) {
  
  console.log("Children2 rendered!!");
  
  return(
    <div>
      <div>{count}</div>
      <span>This is Children</span>
    </div>
  )
}