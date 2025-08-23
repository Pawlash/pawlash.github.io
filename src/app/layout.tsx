import "~/styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "~/components/Header";

export const metadata: Metadata = {
	title: "Pawlash",
	description: "My personal website",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["400"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={jetBrainsMono.className}>
			<body className="mx-auto max-w-6xl bg-background px-2 pt-16 text-foreground">
				<Header />
				<div className="mx-2 md:mx-0">
					<main className="flex max-w-6xl flex-col rounded-xl border border-foreground p-4">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
