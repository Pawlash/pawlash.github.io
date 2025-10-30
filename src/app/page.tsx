import { Geist } from "next/font/google";
const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist",
	weight: ["400"],
});
const age = new Date().getFullYear() - 2006;
export default function HomePage() {
	return (
		<section className={`${geist.className}`}>
			<h1 className="mb-4 font-bold text-3xl">Hi there!👋</h1>
			<p className="mb-6">
				I'm a {age} year old software engineer with hands-on experience across
				the full stack. I've touched a bit of everything - from frontend to
				backend, databases to DevOps - and I enjoy matching the best
				technologies to each project. When it comes to anything
				computer-related, I know my stuff inside out. I love learning new tools
				and taking on challenges head-on.
			</p>
			<h2 className="mb-2 font-semibold text-2xl">Skills</h2>
			<details>
				<summary className="cursor-pointer font-medium">Frontend</summary>
				<ul className="ml-4 list-inside list-disc">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>TypeScript</li>
					<li>Svelte</li>
					<li>React</li>
					<li>Next.js</li>
				</ul>
			</details>
			<details>
				<summary className="cursor-pointer font-medium">Backend</summary>
				<ul className="ml-4 list-inside list-disc">
					<li>Node.js</li>
					<li>Python</li>
					<li>Golang</li>
					<li>REST APIs</li>
				</ul>
			</details>
			<details>
				<summary className="cursor-pointer font-medium">DevOps / Tools</summary>
				<ul className="ml-4 list-inside list-disc">
					<li>Docker</li>
					<li>Git</li>
					<li>Linux</li>
				</ul>
			</details>
			<details>
				<summary className="cursor-pointer font-medium">
					Computer Skills / Other Tech
				</summary>
				<ul className="ml-4 list-inside list-disc">
					<li>Hardware troubleshooting</li>
					<li>System optimization</li>
					<li>Networking</li>
					<li>Scripting & automation</li>
					<li>Virtualization</li>
					<li>Performance tuning</li>
					<li>Security basics</li>
					<li>Linux/Windows administration</li>
				</ul>
			</details>
		</section>
	);
}
