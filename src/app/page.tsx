import { Geist } from "next/font/google";
import Header from "~/components/Header";
const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist",
	weight: ["400"]
});
export default function HomePage() {
	return (
		<section className={`${geist.className}`}>
			<h1 className="text-3xl font-bold mb-4">Hi there!👋</h1>
			<p className="mb-6">
I'm a software engineer with hands-on experience across the full stack. I've touched a bit of everything – from frontend to backend, databases to DevOps – and I enjoy matching the best technologies to each project. When it comes to anything computer-related, I know my stuff inside out. I love learning new tools and taking on challenges head-on.			</p>
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">Skills</h2>
				<details>
					<summary className="font-medium cursor-pointer">Frontend</summary>
					<ul className="ml-4 list-disc list-inside">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>Svelte</li>
						<li>React</li>
					</ul>
				</details>
				<details>
					<summary className="font-medium cursor-pointer">Backend</summary>
					<ul className="ml-4 list-disc list-inside">
						<li>Node.js</li>
						<li>Python</li>
						<li>REST APIs</li>
					</ul>
				</details>
				<details>
					<summary className="font-medium cursor-pointer">DevOps / Tools</summary>
					<ul className="ml-4 list-disc list-inside">
						<li>Docker</li>
						<li>Git</li>
						<li>Linux</li>
					</ul>
				</details>
				<details>
					<summary className="font-medium cursor-pointer">Computer Skills / Other Tech</summary>
					<ul className="ml-4 list-disc list-inside">
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
				</div>
		</section>
	);
}
