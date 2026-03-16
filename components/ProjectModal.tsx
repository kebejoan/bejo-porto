// components/ProjectModal.tsx
import { Project } from "@/data/projects";
import Badge from "./badges";

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: Project;
}

export default function ProjectModal({
	isOpen,
	onClose,
	project,
}: ProjectModalProps) {
	if (!isOpen) return null;

	const {
		title,
		summary,
		background,
		methods,
		results,
		responsibility,
		video,
		techstack,
		repo,
		live,
	} = project;

	return (
		<div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 text-justify text-sm lg:text-base">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-bgblue/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal Content */}
			<div className="relative w-[1024] max-h-[90vh] overflow-y-auto bg-bgblue rounded-xl p-4 shadow-2xl no-scrollbar">
				<div className="w-full flex justify-between items-center">
					<h2 className="text-3xl font-pixel mb-4">{title}</h2>
					<div className="flex items-center flex-end gap-5 ">
						<a
							target="_blank"
							href={repo}
							className="font-bold text-lg lg:text-xl hover:text-bgblueflip"
						>
							Repo
						</a>
						<a
							target="_blank"
							href={live}
							className="font-bold text-lg lg:text-xl hover:text-bgblueflip"
						>
							Live
						</a>
						<button
							onClick={onClose}
							className="cursor-pointer font-pixel text-xl lg:text-2xl hover:text-bgblueflip"
						>
							[X]
						</button>
					</div>
				</div>
				<div className="relative w-full aspect-[16/7] bg-bgblue rounded-md mb-2 overflow-hidden">
					<video
						autoPlay
						muted
						loop
						src={video?.[0]?.src || "blank"}
						className="absolute inset-0 w-full h-full object-cover object-top hover:play"
					/>
				</div>
				<div className="mb-2">
					<p className="">{summary}</p>
				</div>
				<div className="mb-2">
					<p className="font-bold">Background</p>
					<p className="">{background}</p>
				</div>
				<div className="mb-2">
					<p className="font-bold">Methods</p>
					<div>
						{methods.map((method) => (
							<p className="" key={method}>
								• {method}
							</p>
						))}
					</div>
				</div>
				<div className="mb-2">
					<p className="font-bold">Results</p>
					<div>
						{results.map((result) => (
							<p className="" key={result}>
								• {result}
							</p>
						))}
					</div>
				</div>
				<div className="mb-4">
					<p className="font-bold">Responsibility</p>
					<p className="">{responsibility}</p>
				</div>
				<div>
					<div className="flex flex-wrap gap-2">
						{techstack.map((stack) => (
							<Badge text={stack} key={stack} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
