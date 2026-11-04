import { Mail } from "lucide-react";
import Image from "next/image";

const rowClass =
	"border-border bg-card hover:border-accent flex items-center gap-4 rounded-xl border p-4 transition-colors";

const socials = [
	{ href: "https://youtube.com/@pawlash", icon: "youtube", label: "YouTube" },
	{ href: "https://tiktok.com/@pawlash", icon: "tiktok", label: "TikTok" },
];

export default function ContactPage() {
	return (
		<section>
			<h1 className="mb-4 text-3xl font-bold tracking-tight">Contact</h1>
			<p className="text-muted mb-8 text-lg">
				If you'd like to get in touch, feel free to reach out via email or
				connect with me on social media.
			</p>

			<div className="grid gap-3 sm:grid-cols-2">
				<a href="mailto:pawlash333@gmail.com" className={rowClass}>
					<Mail className="h-6 w-6 shrink-0" />
					<div>
						<h2 className="font-semibold">Email</h2>
						<p className="text-muted text-sm">pawlash333@gmail.com</p>
					</div>
				</a>
				<a
					href="https://github.com/pawlash"
					target="_blank"
					rel="noopener noreferrer"
					className={rowClass}
				>
					<Image src="/icons/github.svg" width={24} height={24} alt="" />
					<div>
						<h2 className="font-semibold">GitHub</h2>
						<p className="text-muted text-sm">github.com/pawlash</p>
					</div>
				</a>
			</div>

			<h2 className="mt-10 mb-4 text-xl font-semibold">Social Media</h2>
			<ul className="grid gap-3 sm:grid-cols-3">
				{socials.map(({ href, icon, label }) => (
					<li key={label}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={rowClass}
						>
							<Image src={`/icons/${icon}.svg`} width={24} height={24} alt="" />
							{label}
						</a>
					</li>
				))}
				<li>
					<details className="border-border bg-card rounded-xl border p-4">
						<summary className="flex cursor-pointer list-none items-center gap-4">
							<Image src="/icons/discord.svg" width={24} height={24} alt="" />
							Discord
						</summary>
						<span className="text-muted mt-2 block font-mono text-sm">
							pawlash
						</span>
					</details>
				</li>
			</ul>
		</section>
	);
}
