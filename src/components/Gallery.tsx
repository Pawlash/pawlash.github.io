"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export type Screenshot = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

const iconButton =
	"bg-card/80 hover:bg-card border-border absolute rounded-full border p-2 transition-colors";

export default function Gallery({ shots }: { shots: Screenshot[] }) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [index, setIndex] = useState(0);
	const current = shots[index];

	const open = (i: number) => {
		setIndex(i);
		dialogRef.current?.showModal();
	};
	const close = () => dialogRef.current?.close();
	const step = (delta: number) =>
		setIndex((i) => (i + delta + shots.length) % shots.length);

	return (
		<>
			<div className="mt-5 grid gap-3 sm:grid-cols-2">
				{shots.map((shot, i) => (
					<button
						key={shot.src}
						type="button"
						onClick={() => open(i)}
						className="border-border hover:border-accent block cursor-zoom-in overflow-hidden rounded-lg border transition-colors"
					>
						<Image
							src={shot.src}
							alt={shot.alt}
							width={shot.width}
							height={shot.height}
							className="aspect-[1117/662] h-auto w-full object-cover object-top"
						/>
					</button>
				))}
			</div>

			{/* Clicking anywhere outside the image or the buttons closes the viewer; Esc is handled by <dialog>. */}
			<dialog
				ref={dialogRef}
				className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
				onClick={(e) => {
					if (!(e.target as HTMLElement).closest("img, button")) close();
				}}
				onKeyDown={(e) => {
					if (e.key === "ArrowLeft") step(-1);
					if (e.key === "ArrowRight") step(1);
				}}
			>
				{current && (
					<div className="flex h-full w-full items-center justify-center p-4 sm:p-12">
						<Image
							src={current.src}
							alt={current.alt}
							width={current.width}
							height={current.height}
							className="h-auto max-h-full w-auto max-w-full rounded-lg shadow-2xl"
						/>
						<button
							type="button"
							onClick={close}
							aria-label="Close"
							className={`${iconButton} top-4 right-4`}
						>
							<X className="h-5 w-5" />
						</button>
						{shots.length > 1 && (
							<>
								<button
									type="button"
									onClick={() => step(-1)}
									aria-label="Previous screenshot"
									className={`${iconButton} top-1/2 left-4 -translate-y-1/2`}
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<button
									type="button"
									onClick={() => step(1)}
									aria-label="Next screenshot"
									className={`${iconButton} top-1/2 right-4 -translate-y-1/2`}
								>
									<ChevronRight className="h-5 w-5" />
								</button>
							</>
						)}
					</div>
				)}
			</dialog>
		</>
	);
}
