import "~/styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { ViewTransition } from "react";
import Header from "~/components/Header";

export const metadata: Metadata = {
	title: "Pawlash",
	description: "Paweł Jurkiewicz, full-stack software engineer.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const schibstedGrotesk = Schibsted_Grotesk({
	subsets: ["latin", "latin-ext"],
	variable: "--font-schibsted-grotesk",
});
const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin", "latin-ext"],
	variable: "--font-jetbrains-mono",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${schibstedGrotesk.variable} ${jetBrainsMono.variable}`}
		>
			<body className="bg-background text-foreground mx-auto max-w-3xl px-4 pt-10 pb-16 font-sans antialiased md:pt-16">
				<Header />
				{/* Next's <Link> navigations run as transitions, so this animates page changes (see globals.css). */}
				<ViewTransition name="page">
					<main className="mt-10">{children}</main>
				</ViewTransition>
			</body>
		</html>
	);
}
