import { Mail } from "lucide-react";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist",
	weight: ["400"],
});
export default function ContactPage() {
	return (
		<section className={`${geist.className}`}>
			<h1 className="mb-4 font-bold text-3xl">Contact Me</h1>
			<p className="mb-6">
				If you'd like to get in touch, feel free to reach out via email or
				connect with me on social media.
			</p>

			<div className="space-y-4">
				<div className="flex items-center gap-3">
					<Mail className="h-6 w-6" />
					<div>
						<h2 className="font-semibold text-2xl">Email</h2>
						<p>pawlash333@gmail.com</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Image src="/icons/github.svg" width={24} height={24} alt="GitHub" />
					<div>
						<h2 className="font-semibold text-2xl">GitHub</h2>
						<Link
							href="https://github.com/pawlash"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							github.com/pawlash
						</Link>
					</div>
				</div>

				<div>
					<h2 className="mb-2 font-semibold text-2xl">Social Media</h2>
					<ul className="space-y-2">
						<li className="flex items-center gap-3">
							<Image
								src="/icons/youtube.svg"
								width={24}
								height={24}
								alt="YouTube"
							/>
							<Link
								href="https://youtube.com/@pawlash"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								YouTube
							</Link>
						</li>
						<li className="flex items-center gap-3">
							<Image
								src="/icons/tiktok.svg"
								width={24}
								height={24}
								alt="TikTok"
							/>
							<Link
								href="https://tiktok.com/@pawlash"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								TikTok
							</Link>
						</li>
						<li>
							<details>
								<summary className="flex cursor-pointer items-center gap-3 hover:underline">
									<Image
										src="/icons/discord.svg"
										width={24}
										height={24}
										alt="Discord"
									/>
									Discord
								</summary>
								<span className="ml-2 text-gray-400">pawlash</span>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
