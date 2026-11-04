import "~/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { ViewTransition } from "react";
import Header from "~/components/Header";

export const metadata: Metadata = {
	title: "Pawlash",
	description: "Paweł Jurkiewicz, full-stack software engineer.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};
// Matches --color-background, so mobile browser chrome blends into the page.
export const viewport: Viewport = {
	themeColor: "#0a0b0d",
	colorScheme: "dark",
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
			// The background lives on <html> too: iOS shows it in the rubber-band overscroll area, which is white otherwise.
			className={`bg-background ${schibstedGrotesk.variable} ${jetBrainsMono.variable}`}
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
