import Age from "~/components/Age";
import { getAge } from "~/lib/age";

const skills = [
	{ group: "Languages", items: ["TypeScript", "Python", "Go"] },
	{
		group: "Frontend",
		items: [
			"React",
			"Next.js",
			"Svelte",
			"SvelteKit",
			"Tailwind CSS",
			"TanStack Query",
			"HTML",
			"CSS",
		],
	},
	{ group: "Mobile", items: ["React Native", "Expo"] },
	{
		group: "Backend",
		items: ["Node.js", "REST APIs", "Redis", "Discord bots (discord.js)"],
	},
	{
		group: "Cloud & DevOps",
		items: [
			"Terraform",
			"Google Cloud",
			"Docker",
			"GitHub Actions",
			"Git",
			"Linux",
		],
	},
	{
		group: "Systems",
		items: [
			"Linux and Windows administration",
			"Networking",
			"Virtualization",
			"Scripting and automation",
			"Hardware diagnostics",
		],
	},
];

export default function HomePage() {
	return (
		<section>
			<h1 className="mb-4 text-3xl font-bold tracking-tight">Hi, I'm Paweł</h1>
			<p className="text-muted max-w-2xl text-lg leading-relaxed">
				I'm a <Age buildAge={getAge()} />
				-year-old full-stack software engineer. I build complete web apps, from
				design to deployment, and I enjoy turning rough ideas into products
				people actually use.
			</p>
			<h2 className="mt-12 mb-6 text-xl font-semibold">Skills</h2>
			<dl className="space-y-4">
				{skills.map(({ group, items }) => (
					<div key={group}>
						<dt className="text-accent font-mono text-sm">{group}</dt>
						<dd className="mt-1">
							<ul className="flex flex-wrap gap-y-0.5">
								{items.map((item) => (
									<li
										key={item}
										className="not-last:after:text-muted/50 not-last:after:mx-2 not-last:after:content-['/']"
									>
										{item}
									</li>
								))}
							</ul>
						</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
