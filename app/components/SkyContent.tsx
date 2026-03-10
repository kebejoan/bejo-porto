import AboutMe from "./1_AboutMe";
import Education from "./2_Education";
import WorkExperience from "./3_WorkExperience";
import ProjectExperience from "./4_ProjectExperience";

export default function SkyContent() {
	return (
		<div className="w-full flex flex-col items-center">
			{/* Mobile */}
			<div className="flex lg:hidden flex-col items-center justify-center w-full gap-50">
				<ProjectExperience />
				<WorkExperience />
				<Education />
				<AboutMe />
			</div>
			{/* Desktop */}
			<div className="hidden lg:flex flex-col items-center justify-center w-full gap-2">
				<div className="flex items-center w-[1024] h-screen outline-2">
					<ProjectExperience />
				</div>
				<div className="flex items-center w-[1024] h-screen outline-2">
					<WorkExperience />
				</div>
				<div className="flex items-center w-[1024] h-screen outline-2">
					<Education />
				</div>
				<div className="flex items-center w-[1024] h-screen outline-2">
					<AboutMe />
				</div>
			</div>
		</div>
	);
}
