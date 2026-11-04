import { ArrowUpRight } from "lucide-react";
import Gallery, { type Screenshot } from "~/components/Gallery";

type Project = {
	title: string;
	badge?: string;
	description: string;
	stack: string[];
	link?: { href: string; label: string };
	screenshots?: Screenshot[];
};

const projects: Project[] = [
	{
		title: "Driving theory tests",
		badge: "Not published yet",
		description:
			"Free driving theory tests covering every Polish licence category: AM, A1, A2, A, B, B1, C1, C, D1, D and T, plus the UDT forklift exam. The mock exam works like the real one, with 32 questions, the same timers and the same scoring, and there's a learning mode with progress tracking. Available in Polish, English, German and Ukrainian (driving questions come straight from the official government database). It isn't public yet, but I may launch it in the future.",
		stack: ["SvelteKit", "Svelte 5", "Paraglide"],
		screenshots: [
			{
				src: "/projects/driving-tests/categories.avif",
				alt: "Home screen with category and mode selection",
				width: 1128,
				height: 843,
			},
			{
				src: "/projects/driving-tests/exam.avif",
				alt: "Mock exam question with a video recording and a timer",
				width: 1117,
				height: 662,
			},
		],
	},
	{
		title: "P1100 macOS driver",
		description:
			"HP's macOS driver for the LaserJet P1100 series is Intel-only, so on Apple Silicon it needs Rosetta, which Apple is phasing out after macOS 27. Without it, a perfectly good printer stops working. I rewrote the part of the driver that matters, the CUPS filter, from scratch in C. It runs natively, and its output matches HP's byte for byte across 85 test cases. In other words, I saved a printer from extinction.",
		stack: ["C", "CUPS", "macOS"],
		link: {
			href: "https://github.com/Pawlash/p1100-macos-driver",
			label: "View on GitHub",
		},
	},
];

export default function ProjectsPage() {
	return (
		<section>
			<h1 className="mb-8 text-3xl font-bold tracking-tight">Projects</h1>
			<div className="space-y-8">
				{projects.map((project) => (
					<article
						key={project.title}
						className="border-border bg-card rounded-xl border p-5 md:p-6"
					>
						<div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
							<h2 className="text-xl font-semibold">{project.title}</h2>
							{project.badge && (
								<span className="text-muted text-sm">{project.badge}</span>
							)}
						</div>
						<p className="text-muted leading-relaxed">{project.description}</p>
						{project.screenshots && <Gallery shots={project.screenshots} />}
						<div className="mt-5 flex flex-wrap items-center justify-between gap-3">
							<ul className="flex flex-wrap gap-2">
								{project.stack.map((tech) => (
									<li
										key={tech}
										className="border-border text-muted rounded-md border px-2 py-0.5 font-mono text-xs"
									>
										{tech}
									</li>
								))}
							</ul>
							{project.link && (
								<a
									href={project.link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent inline-flex items-center gap-1 text-sm hover:underline"
								>
									{project.link.label}
									<ArrowUpRight className="h-4 w-4" />
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
