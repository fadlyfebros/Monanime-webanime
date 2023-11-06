import Link from "next/link";

export default function(){
  return(
    <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/list">List</Link>
        </li>
      </ul>
  )
}