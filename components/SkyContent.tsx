import AboutMe from "./1_AboutMe";
import Education from "./2_Education";
import WorkExperience from "./3_WorkExperience";
import ProjectExperience from "./4_ProjectExperience";
import AdditionalInfo from "./5_AdditionalInfo";
import ContactSocials from "./6_ContactSocials";

export default function SkyContent() {
	const sections = [
		{ id: "contact", component: <ContactSocials /> },
		{ id: "info", component: <AdditionalInfo /> },
		{ id: "projects", component: <ProjectExperience /> },
		{ id: "work", component: <WorkExperience /> },
		{ id: "education", component: <Education /> },
		{ id: "about", component: <AboutMe /> },
	];

	return (
		<>
			{sections.map((sect) => (
				<section
					id={sect.id}
					key={sect.id}
					className="h-screen w-full flex items-center justify-center snap-start shrink-0"
				>
					<div className="max-h-full w-full lg:w-[1024px] overflow-y-auto no-scrollbar">
						{sect.component}
					</div>
				</section>
			))}
		</>
	);
}
