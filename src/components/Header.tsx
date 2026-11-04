import { Typewriter } from "nextjs-simple-typewriter";
import Nav from "~/components/Nav";
export default function Header() {
	return (
		<header className="border-border flex flex-col gap-4 border-b pb-6 font-mono [view-transition-name:site-header] sm:flex-row sm:items-center sm:justify-between">
			<h1 className="text-xl font-bold">
				<span className="text-accent">{"{ "}</span>
				<Typewriter
					words={["Pawlash", "Paweł Jurkiewicz"]}
					loop={0}
					cursor={true}
					cursorBlinking={true}
				/>
				<span className="text-accent">{" }"}</span>
			</h1>
			<Nav />
		</header>
	);
}
