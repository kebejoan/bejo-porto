import ProjectCard from "./ProjectCard";

export default function ProjectExperience() {
	return (
		<div className="w-full flex flex-col px-4">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel">
				Project Experience👷🏻
			</h2>
			<div className="w-full flex flex-row gap-2 mb-4">
				<ProjectCard />
			</div>
			<div className="w-full flex justify-between">
				<div className="w-fit flex gap-5 ">
					<div className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
						prev
					</div>
					<div className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
						next
					</div>
				</div>
				<p className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
					...see all projects
				</p>
			</div>
		</div>
	);
}
