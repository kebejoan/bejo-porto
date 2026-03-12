import AboutMe from "./1_AboutMe";
import Education from "./2_Education";
import WorkExperience from "./3_WorkExperience";
import ProjectExperience from "./4_ProjectExperience";
import AdditionalInfo from "./5_AdditionalInfo";

export default function SkyContent() {
	return (
		<div className="w-full flex flex-col items-center">
			{/* Mobile */}
			<div className="flex lg:hidden flex-col items-center justify-center w-full">
				<div className="flex items-center w-full h-screen">
					<AdditionalInfo />
				</div>
				<div className="flex items-center w-full h-screen">
					<ProjectExperience />
				</div>
				<div className="flex items-center w-full h-screen">
					<WorkExperience />
				</div>
				<div className="flex items-center w-full h-screen">
					<Education />
				</div>
				<div className="flex items-center w-full h-screen">
					<AboutMe />
				</div>
			</div>
			{/* Desktop */}
			<div className="hidden lg:flex flex-col items-center justify-center w-full gap-2">
				<div className="flex items-center w-[1024] h-screen">
					<AdditionalInfo />
				</div>
				<div className="flex items-center w-[1024] h-screen">
					<ProjectExperience />
				</div>
				<div className="flex items-center w-[1024] h-screen">
					<WorkExperience />
				</div>
				<div className="flex items-center w-[1024] h-screen">
					<Education />
				</div>
				<div className="flex items-center w-[1024] h-screen">
					<AboutMe />
				</div>
			</div>
		</div>
	);
}
