import { Typewriter } from "nextjs-simple-typewriter"
import Link from "next/link"
export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <div className="md:hidden"></div>
        <h1 className="text-2xl font-bold">
        <Typewriter 
          words={["Pawlash", "Paweł Jurkiewicz"]}
          loop={0}
          cursor={true}
          cursorBlinking={true}
        />
      </h1>
      <div className="md:hidden"></div>
      <div className="hidden md:block"></div>
      <div className="text-2xl font-bold hidden md:block">{'{ }'}</div>
      </div>
      <div className="flex justify-center flex-col md:flex-row">
        <Link className="p-4 flex justify-center" href="/">
          About
        </Link>
        <Link className="p-4 flex justify-center" href="/projects">
          Projects
        </Link>
        <Link className="p-4 flex justify-center" href="/contact">
          Contact
        </Link>
      </div>
    </header>
  )
}