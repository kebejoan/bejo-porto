export default function AboutMe() {
	return (
		<div className="w-full grid grid-cols-4 gap-2">
			<div className="w-full col-span-3">
				<div className="w-full flex flex-col items-center gap-4 w-full outline-1 grid-span-2">
					<div className="w-full flex flex-col gap-2 p-4 outline-2">
						<div className="text-2xl font-bold">
							Hey there, My name is Joe! 👋
						</div>
						<div className="w-full outline-1"></div>
						<div className="text-[18px] text-justify">
							People usually calls me <strong>Joe/Bejo</strong>. I am an{" "}
							<strong>Automation Engineer and Full-Stack Developer</strong>{" "}
							dedicated to architecting reliable, high-performance systems
							through data-driven and well-reasoned technical decisions. With
							over four years of experience delivering mission-critical
							industrial solutions using{" "}
							<strong>
								STARDOM Controller, VDS HMI, SCADA CI Server, and 3rd Party HMI
								Touch Panel
							</strong>
							, I bring a disciplined engineering rigor to modern web ecosystems
							like <strong>TypeScript, Nest.js, and Next.js.</strong> By
							graduating at the top of my Full-Stack Software Engineering
							cohort, I have proven a rapid ability to build scalable software,
							including developing custom <strong>Python ETL tools</strong> that
							reduced operational workflows by <strong>90%.</strong> I am
							excited to leverage this system-driven mindset to develop
							dependable, market-responsive applications that prioritize
							stability and execution excellence.
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-2 p-4 outline-2">
				Tech Stack Badges
			</div>
		</div>
	);
}
