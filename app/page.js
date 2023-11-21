import Link from "next/link"
import StudentInfo from "./studentInfo";

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <div className="flex flex-col text-blue-500">
        <Link href="/week2" className=" hover:text-blue-800">Week 2</Link>
        <Link href="/week3" className=" hover:text-blue-800">Week 3</Link>
        <Link href="/week4" className=" hover:text-blue-800">Week 4</Link>
        <Link href="/week5" className=" hover:text-blue-800">Week 5</Link>
        <Link href="/week6" className=" hover:text-blue-800">Week 6</Link>
        <Link href="/week7" className=" hover:text-blue-800">Week 7</Link>
        <Link href="/week8" className=" hover:text-blue-800">Week 8</Link>
        <Link href="/week10" className=" hover:text-blue-800">Week 10</Link>
      </div>
    </div>
  );
}
