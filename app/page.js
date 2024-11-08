import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Assignments</Link>
      <p> </p>
      <Link href="./week-3/" className="underline text-cyan-600 hover:text-cyan-300">Week 3 Assignments</Link>
      <br />
      <Link href="./week-4/" className="underline text-cyan-600 hover:text-cyan-300">Week 4 Assignments</Link>
      <Link href="./week-5/" className="underline text-cyan-600 hover:text-cyan-300">Week 5 Assignments</Link>
      <Link href="./week-6/" className="underline text-cyan-600 hover:text-cyan-300">Week 6 Assignments</Link>

    </main>
  )
}