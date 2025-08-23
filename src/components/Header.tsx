import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
export default function Header() {
	return (
		<header>
			<div className="flex justify-between">
				<div className="md:hidden" />
				<h1 className="font-bold text-2xl">
					<Typewriter
						words={["Pawlash", "Paweł Jurkiewicz"]}
						loop={0}
						cursor={true}
						cursorBlinking={true}
					/>
				</h1>
				<div className="md:hidden" />
				<div className="hidden md:block" />
				<div className="hidden font-bold text-2xl md:block">{"{ }"}</div>
			</div>
			<div className="flex flex-col justify-center md:flex-row">
				<Link className="flex justify-center p-4" href="/">
					About
				</Link>
				<Link className="flex justify-center p-4" href="/projects">
					Projects
				</Link>
				<Link className="flex justify-center p-4" href="/contact">
					Contact
				</Link>
			</div>
		</header>
	);
}
