/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	// GitHub Pages has no image optimization server; screenshots are pre-optimized to AVIF.
	images: { unoptimized: true },
};

export default config;
