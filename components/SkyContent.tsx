import AboutMe from "./1_AboutMe";
import Education from "./2_Education";
import WorkExperience from "./3_WorkExperience";
import ProjectExperience from "./4_ProjectExperience";
import AdditionalInfo from "./5_AdditionalInfo";
import ContactSocials from "./6_ContactSocials";

export default function SkyContent() {
  const sections = [
    <ContactSocials />,
    <AdditionalInfo />,
    <ProjectExperience />,
    <WorkExperience />,
    <Education />,
    <AboutMe />,
  ];

  return (
    <>
      {sections.map((comp, idx) => (
        <section
          key={idx}
          className="h-screen w-full flex items-center justify-center snap-start shrink-0"
        >
          <div className="max-h-full w-full lg:w-[1024px] overflow-y-auto no-scrollbar">
            {comp}
          </div>
        </section>
      ))}
    </>
  );
}
