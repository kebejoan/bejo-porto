export default function AboutMe() {
	return (
		<div className="w-full m-4 flex flex-col items-center gap-4 w-full outline-1">
			<div className="w-full xl:w-1/2 flex flex-col gap-2 p-4 outline-2">
				<div className="text-4xl font-bold">About Me</div>
				<div className="w-full outline-1"></div>
				<div className="text-xl text-justify">
					I am an Automation Engineer and Full-Stack Developer dedicated to
					architecting reliable, high-performance systems through data-driven
					and well-reasoned technical decisions. With over four years of
					experience delivering mission-critical industrial solutions using{" "}
					<strong>
						STARDOM Controller, VDS HMI, SCADA CI Server, and 3rd Party HMI
						Touch Panel
					</strong>
					, I bring a disciplined engineering rigor to modern web ecosystems
					like TypeScript, Nest.js, and Next.js. By graduating at the top of my
					Full-Stack Software Engineering cohort, I have proven a rapid ability
					to build scalable software, including developing custom Python ETL
					tools that reduced operational workflows by 90%. I am excited to
					leverage this system-driven mindset to develop dependable,
					market-responsive applications that prioritize stability and execution
					excellence.
				</div>
			</div>
		</div>
	);
}
