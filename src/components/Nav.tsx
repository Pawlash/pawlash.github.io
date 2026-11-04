"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className="flex gap-1 text-sm">
			{links.map(({ href, label }) => {
				const active =
					href === "/" ? pathname === "/" : pathname.startsWith(href);
				return (
					<Link
						key={href}
						href={href}
						aria-current={active ? "page" : undefined}
						className={`rounded-md px-3 py-1.5 transition-colors ${
							active
								? "bg-card text-foreground"
								: "text-muted hover:text-foreground"
						}`}
					>
						{label}
					</Link>
				);
			})}
		</nav>
	);
}
